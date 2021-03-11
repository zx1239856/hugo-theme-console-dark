# Hugo Theme: Console (Dark)

A minimal, responsive and light theme for Hugo inspired by Linux console. Modified from [hugo-theme-console](https://github.com/mrmierzejewski/hugo-theme-console.git) to add support for dark mode and sticky footer.

## Update
+ (2021-03-11) Add support for academic publications, please refer to the example site for details


![Console](https://github.com/zx1239856/hugo-theme-console-dark/blob/master/images/preview.png?raw=true)

## Original Live demo

* https://mrmierzejewski.com
* https://themes.gohugo.io/theme/hugo-theme-console/

## Installation

```sh
$ mkdir themes
$ cd themes
$ git submodule add https://github.com/zx1239856/hugo-theme-console-dark hugo-theme-console-dark
```
    
See the [Hugo documentation](https://gohugo.io/themes/installing/) for more information.

## Configuration

Set theme parameter in your config file:

```
theme = "hugo-theme-console-dark"
```

## Example Site

To run the example site, please type the following command:

```
makefile hugo-server
```

### Start page

The default start page template is located at ```themes/hugo-theme-console/layouts/index.html```. To change the page content, you to need to copy this file to 
your website top-level ```layouts``` folder (```layouts/index.html```).

## License

Copyright © 2021 [zx1239856](https://github.com/zx1239856)

The theme is released under the MIT License. Check the [original theme license](https://github.com/panr/hugo-theme-terminal/blob/master/LICENSE.md) for additional licensing information.
