// Importamos las funciones necesarias de Gulp
import { src, dest, watch } from 'gulp';
// Importamos Dart-Sass para compilar Sass a CSS
import * as dartSass from 'sass';
// Importamos gulp-sass y lo configuramos para usar Dart-Sass
import gulpSass from 'gulp-sass';

const SASS = gulpSass(dartSass);  // Combinamos gulp-sass con Dart-Sass

// Función que compila archivos Sass a CSS
export function css(done) {
    src('src/scss/app.scss')      // Seleccionamos el archivo Sass de origen
        .pipe(SASS().on('error', SASS.logError))           // Compilamos el archivo Sass a CSS y registramos cualquier error sin detener la ejecución
        .pipe(dest('build/css'))// Guardamos el archivo CSS en la carpeta de destino

    done();  // Marcamos la tarea como terminada
}

// Función que observa los cambios en archivos Sass
export function dev() {
    watch('src/scss/**/*.scss', css);  // Observamos el archivo Sass y ejecutamos la función `css` en cada cambio
}
