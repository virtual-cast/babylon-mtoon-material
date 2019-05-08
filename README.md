# babylon-mtoon-material

[![Greenkeeper badge](https://badges.greenkeeper.io/virtual-cast/babylon-mtoon-material.svg)](https://greenkeeper.io/)


Unity MToon Shader WebGL porting to babylon.js.

This is Work In Progress. Some settings will be ignored or generates inconsistent lighting.

[About MToon](https://vrm.dev/en/univrm/shaders/mtoon/)([ja](https://vrm.dev/univrm/shaders/mtoon/))

[Original Unity MToon Repository: Santarh/MToon](https://github.com/Santarh/MToon/)

## Features

- Some [StandardMaterial](https://doc.babylonjs.com/api/classes/babylon.standardmaterial) abilities
    - Lighting(Only 1 light)
    - Multiview
    - LogarithmicDepth
    - Fog
    - Bones in shader
    - MorphTargets in shader
    - Vertex Alpha
    - Shadow
    - EffectFallback
    - Instances
    - ClipPlane
    - AmbientColor

## Usage

This material will be automatically assined to VRM/VCI model within [babylon-vrm-loader](https://github.com/virtual-cast/babylon-vrm-loader).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Build

```s
$ yarn build
```

It generates production file to `./dist/index.js`.

### Debugging MToonMaterial

TBD

## Related Links

- [BabylonJS/Babylon.js: Babylon.js: a complete JavaScript framework for building 3D games with HTML 5 and WebGL](https://github.com/BabylonJS/Babylon.js)
- [Santarh/MToon: Toon Shader with Unity Global Illumination](https://github.com/Santarh/MToon/)
- [vrm-c/UniVRM: Unity package that can import and export VRM format](https://github.com/vrm-c/UniVRM)
- [Create a Material for the Material Library](https://doc.babylonjs.com/how_to/how_to_create_a_material_for_materialslibrary)
- [Materials](https://doc.babylonjs.com/babylon101/materials)

## Licenses

see [LICENSE](./LICENSE).

This project uses [babylon.js with Apache License, Version 2.0](https://github.com/BabylonJS/Babylon.js/blob/master/license.md).

This project is based on [MToon with MIT License](https://github.com/Santarh/MToon/blob/master/LICENSE).
