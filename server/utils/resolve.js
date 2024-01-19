const path = require( 'path' );

export default function resolve(p) {
    return path.join(__dirname, p);
}
