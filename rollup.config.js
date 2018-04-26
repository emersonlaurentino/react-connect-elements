import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/react-connect-elements.js',
    format: 'cjs',
  },
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**' }),
    uglify(),
    filesize(),
  ],
};
