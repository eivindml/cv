# ![Sample](github/sample.png)

<p align="center">

<a href="license">
<img alt="License" src="https://img.shields.io/github/license/eivindml/cv.svg">
</a>

<a href="https://www.paypal.me/eivindml">
<img alt="Donate" src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
</a>

<br />
<br />
</p>

<p align="center">
Personal CV. Created to be modular, so it's really simple and quick to add/remove sections, just by commenting one line. The PDF output can be found [here in the build folder](build/eivindml-cv.pdf).

<br />
<br />
</p>

## Table of Contents

- [CV](#)
    - [Table of Contents](#table-of-contents)
    - [Usage](#usage)
    - [Dependencies](#installation)
    - [License](#license)

## Usage

Make sure all dependencies are installed. Compile `eivindml-cv.tex` with your favorite TeX/LaTeX engine, or use the automated gulp build script, by running:

```
npm install
gulp
```

For continous compiling run `gulp watch`.

## Dependencies

The automated gulp build script in `gulpfile.js` requires the `pdflatex` distribution to run. The TeX document depends on the [moderncv](https://www.ctan.org/pkg/moderncv?lang=en) (for styling) latex package to be available to the system. This can be installed by

```
sudo tlmgr install moderncv
```

To use the font used in this document, install it by

```
sudo tlmgr install alegreya
```

## License

[MIT](license) © [Eivind Lindbråten](http://madebymist.com)
