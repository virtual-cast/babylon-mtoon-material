import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Engine } from '@babylonjs/core/Engines/engine';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { PointLight } from '@babylonjs/core/Lights/pointLight';
import { ShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator';
import { Material } from '@babylonjs/core/Materials/material';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { Color3, Vector3 } from '@babylonjs/core/Maths/math';
import { SphereBuilder } from '@babylonjs/core/Meshes/Builders/sphereBuilder';
import { TorusKnotBuilder } from '@babylonjs/core/Meshes/Builders/torusKnotBuilder';
import { VertexBuffer } from '@babylonjs/core/Buffers/buffer';
import { Scene } from '@babylonjs/core/scene';
import { MToonMaterial } from '../mtoon-material';

import '@babylonjs/core/Helpers/sceneHelpers';
import '@babylonjs/inspector';

async function main() {
    const debugProperties = getDebugProperties();
    const canvas = document.getElementById('main-canvas') as HTMLCanvasElement;
    const engine = new Engine(
        canvas,
        true,
        {
            alpha: false,
            disableWebGL2Support: debugProperties.webgl1,
        },
    );

    const scene = new Scene(engine);
    const camera = new ArcRotateCamera('MainCamera1', 0, 0, 3, new Vector3(0, 1.5, 0), scene, true);
    camera.lowerRadiusLimit = 0.1;
    camera.upperRadiusLimit = 20;
    camera.wheelDeltaPercentage = 0.01;
    camera.setPosition(new Vector3(0, 1.5, -3));
    camera.setTarget(new Vector3(0, 1.5, 0));
    camera.attachControl(canvas);

    scene.createDefaultEnvironment({
        createGround: true,
        createSkybox: false,
        enableGroundMirror: false,
        enableGroundShadow: false,
    });

    // Lights
    const directionalLight = new DirectionalLight('DirectionalLight1', new Vector3(1, -0.5, 0.0), scene);
    directionalLight.position = new Vector3(-50, 25, 0);
    directionalLight.setEnabled(true);
    const hemisphericLight = new HemisphericLight('HemisphericLight1', new Vector3(-0.2, -0.8, -1), scene);
    hemisphericLight.setEnabled(false);
    const pointLight = new PointLight('PointLight1', new Vector3(0, 0, 1), scene);
    pointLight.setEnabled(false);

    // Meshes
    const standardMaterialSphere = SphereBuilder.CreateSphere('StandardMaterialSphere1', {}, scene);
    standardMaterialSphere.position = new Vector3(1.2, 1.2, 0);
    standardMaterialSphere.receiveShadows = true;

    const shadowCaster = TorusKnotBuilder.CreateTorusKnot('ShadowCaster', {}, scene);
    shadowCaster.position = new Vector3(-10.0, 5.0, 0.0);
    shadowCaster.setEnabled(debugProperties.shadow);
    if (debugProperties.shadow) {
        const shadowGenerator = new ShadowGenerator(1024, directionalLight);
        shadowGenerator.addShadowCaster(shadowCaster);
    }

    const mtoonMaterials: MToonMaterial[] = [];
    {
        const mat = new MToonMaterial('MtoonMaterialDefault', scene);
        mat.outlineWidthMode = 1;
        mtoonMaterials.push(mat);
    }
    {
        const mat = new MToonMaterial('MtoonMaterialNormal', scene);
        mat.outlineWidthMode = 1;
        // Textures from https://www.babylonjs-playground.com/#20OAV9#33
        const diffuse = new Texture('http://i.imgur.com/Wk1cGEq.png', scene);
        diffuse.uScale = 4;
        diffuse.vScale = 4;
        mat.diffuseTexture = diffuse;
        mat.shadeTexture = mat.diffuseTexture.clone();
        mat.shadeColor = new Color3(0.871, 0.196, 0.416);
        const bump = new Texture('http://i.imgur.com/wGyk6os.png', scene);
        bump.uScale = 4;
        bump.vScale = 4;
        mat.bumpTexture = bump;
        mtoonMaterials.push(mat);
    }
    {
        const mat = new MToonMaterial('MtoonMaterialTransparent', scene);
        mat.outlineWidthMode = 1;
        // Textures from https://www.babylonjs-playground.com/#YDO1F#18
        mat.diffuseTexture = new Texture('https://upload.wikimedia.org/wikipedia/commons/8/87/Alaskan_Malamute%2BBlank.png', scene);
        mat.diffuseTexture.hasAlpha = true;
        mat.shadeTexture = mat.diffuseTexture.clone();
        mat.alphaBlend = true;
        mtoonMaterials.push(mat);
    }
    {
        const mat = new MToonMaterial('MtoonMaterialTransparentCutout', scene);
        mat.outlineWidthMode = 1;
        // Textures from https://www.babylonjs-playground.com/#YDO1F#18
        mat.diffuseTexture = new Texture('https://upload.wikimedia.org/wikipedia/commons/8/87/Alaskan_Malamute%2BBlank.png', scene);
        mat.diffuseTexture.hasAlpha = true;
        mat.shadeTexture = mat.diffuseTexture.clone();
        mat.alphaTest = true;
        mat.alphaCutOff = 0.500;
        mtoonMaterials.push(mat);
    }
    {
        const mat = new MToonMaterial('MtoonMaterialRim', scene);
        mat.outlineWidthMode = 1;
        mat.diffuseColor = new Color3(0, 0, 0);
        mat.shadeColor = new Color3(0, 0, 0);
        mat.rimColor = new Color3(1, 1, 1);
        mtoonMaterials.push(mat);
    }
    {
        const mat = new MToonMaterial('MtoonMaterialMatCap', scene);
        // Textures from https://www.outworldz.com/cgi/free-seamless-textures.plx?c=UV%20Checker
        mat.matCapTexture = new Texture('resources/matcap.png', scene, true, false);
        mat.diffuseColor = new Color3(0, 0, 0);
        mat.shadeColor = new Color3(0, 0, 0);
        mtoonMaterials.push(mat);
    }
    {
        const mat = new MToonMaterial('MtoonMaterialScroll', scene);
        mat.outlineWidthMode = 1;
        // Textures from https://www.babylonjs-playground.com/#20OAV9#33
        const diffuse = new Texture('http://i.imgur.com/Wk1cGEq.png', scene);
        diffuse.uScale = 4;
        diffuse.vScale = 4;
        mat.diffuseTexture = diffuse;
        mat.shadeTexture = mat.diffuseTexture.clone();
        mat.shadeColor = new Color3(0.5, 0.5, 0.5);

        const bump = new Texture('http://i.imgur.com/wGyk6os.png', scene);
        bump.uScale = 4;
        bump.vScale = 4;
        mat.bumpTexture = bump;
        mat.uvAnimationScrollX = 0.5;
        mtoonMaterials.push(mat);
    }
    {
        const mat = new MToonMaterial('MtoonMaterialScrollY', scene);
        mat.outlineWidthMode = 1;
        // Textures from https://www.babylonjs-playground.com/#20OAV9#33
        const diffuse = new Texture('http://i.imgur.com/Wk1cGEq.png', scene);
        diffuse.uScale = 4;
        diffuse.vScale = 4;
        mat.diffuseTexture = diffuse;
        mat.shadeTexture = mat.diffuseTexture.clone();
        mat.shadeColor = new Color3(0.5, 0.5, 0.5);

        const bump = new Texture('http://i.imgur.com/wGyk6os.png', scene);
        bump.uScale = 4;
        bump.vScale = 4;
        mat.bumpTexture = bump;
        mat.uvAnimationScrollY = 0.5;
        mtoonMaterials.push(mat);
    }
    {
        const mat = new MToonMaterial('MtoonMaterialRotation', scene);
        mat.outlineWidthMode = 1;
        // Textures from https://www.babylonjs-playground.com/#20OAV9#33
        const diffuse = new Texture('http://i.imgur.com/Wk1cGEq.png', scene);
        diffuse.uScale = 4;
        diffuse.vScale = 4;
        mat.diffuseTexture = diffuse;
        mat.shadeTexture = mat.diffuseTexture.clone();
        mat.shadeColor = new Color3(0.5, 0.5, 0.5);

        const bump = new Texture('http://i.imgur.com/wGyk6os.png', scene);
        bump.uScale = 4;
        bump.vScale = 4;
        mat.bumpTexture = bump;
        mat.uvAnimationRotation = 0.1;
        mtoonMaterials.push(mat);
    }

    mtoonMaterials.forEach((mat, index) => {
        // MToonMaterial は glTF(右手座標) を考慮しているため、 CullMode をデフォルトから反転させる
        mat.sideOrientation = Material.CounterClockWiseSideOrientation;
        mat.cullMode = 1;
        mat.outlineCullMode = 2;
        const sphere = SphereBuilder.CreateSphere(`${mat.name}_Sphere`, {}, scene);
        sphere.position = new Vector3(-1.2 * index, 1.2, 0);
        sphere.receiveShadows = true;
        sphere.material = mat;
    });

    {
        // No Normal
        const mat = new MToonMaterial('MToonMaterialNoNormal', scene);
        mat.cullMode = 1;
        mat.outlineCullMode = 2;
        mat.outlineWidthMode = 1;
        const sphere = SphereBuilder.CreateSphere('MToonMaterialNoNormal_Sphere', {}, scene);
        sphere.position = new Vector3(2.4, 1.2, 0);
        sphere.receiveShadows = true;
        sphere.material = mat;
        if (sphere.geometry) {
            sphere.geometry.removeVerticesData(VertexBuffer.NormalKind);
        }
    }

    if (debugProperties.inspector) {
       await scene.debugLayer.show({
            globalRoot: document.getElementById('wrapper') as HTMLElement,
            handleResize: true,
        });
    }

    engine.runRenderLoop(() => {
        scene.render();
        shadowCaster.rotate(Vector3.Up(), 0.01);
    });
    window.addEventListener('resize', () => {
        engine.resize();
    });
    (window as any).currentScene = scene;
}

interface DebugProperties {
    webgl1: boolean;
    shadow: boolean;
    inspector: boolean;
}

function getDebugProperties(): DebugProperties {
    const href = window.location.href;

    return {
        webgl1: href.includes('webgl1'),
        shadow: href.includes('shadow'),
        inspector: href.includes('inspector'),
    };
}

main().catch((reason) => {
    console.error(reason);
});
