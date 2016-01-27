import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/headspace.js',
  dest: 'dist/headspace.js',
  format: 'umd',
  moduleName: 'Headspace',
  plugins: [ babel({ presets: [ 'es2015-rollup' ] }) ]
}
