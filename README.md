the-repeatable
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-repeatable
[bd_travis_url]: http://travis-ci.org/the-labo/the-repeatable
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-repeatable.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-repeatable
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-repeatable.svg?token=
[bd_license_url]: https://github.com/the-labo/the-repeatable/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/the-labo/the-repeatable
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/the-labo/the-repeatable.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/the-labo/the-repeatable.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/the-labo/the-repeatable
[bd_gemnasium_shield_url]: https://gemnasium.com/the-labo/the-repeatable.svg
[bd_npm_url]: http://www.npmjs.org/package/the-repeatable
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-repeatable.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Repeatable of the-component

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-repeatable --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

import React from 'react'
import { TheRepeatable, TheRepeatableStyle } from 'the-repeatable'
import { TheSpinStyle } from 'the-spin'

class ExampleComponent extends React.PureComponent {
  render () {
    const data = new Array(25).fill(null).map((_, i) => ({id: i, name: `data-${i}`}))
    return (
      <div>
        <TheSpinStyle/>
        <TheRepeatableStyle/>
        <TheRepeatable spinning={false}
                       data={data}
                       render={(data, i) => (
                         <div>This is data: {data.name}</div>
                       )}
        />

        <h3>Horizontal</h3>
        <TheRepeatable spinning={false}
                       data={data}
                       horizontal
                       render={(data, i) => (
                         <div>This is data: {data.name}</div>
                       )}
        />

        <h3>Spinning</h3>
        <TheRepeatable spinning={true}
                       data={data}
                       render={(data, i) => (
                         <div>This is data: {data.name}</div>
                       )}
        />

        <h3>Empty</h3>
        <TheRepeatable spinning={false}
                       data={[]}
                       render={(data, i) => (
                         <div>This is data: {data.name}</div>
                       )}
        />
      </div>

    )
  }
}

export default ExampleComponent

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Components.md.hbs" Start -->

<a name="section-doc-guides-03-components-md"></a>

Components
-----------

### TheRepeatable

Repeatable of the-component

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `ItemComponent` | any  | Item component | `'li'` |
| `ListComponent` | any  |  | `'ul'` |
| `alt` | node  | Alt text when empty | `'Data Not Found'` |
| `data` | array  | Items to render | `[]` |
| `horizontal` | bool  | Render as horizontal list | `false` |
| `keyFor` | func  | Get key for data | `(data, i) => i` |
| `render` | func  | Renderer | `null` |
| `spinning` | bool  | Shows spinner | `false` |

### TheRepeatableStyle

Style for TheRepeatable

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `options` | object  | Style options | `{}` |



<!-- Section from "doc/guides/03.Components.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-repeatable/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][t_h_e_labo_url]

[t_h_e_labo_url]: https://github.com/the-labo

<!-- Links End -->
