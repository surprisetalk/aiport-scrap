
var _ = require('underscore');

// TODO: error handling
// TODO: ../ is bad
// module.exports = name => ( options, query ) =>
//     ({
//         name: name,
//         html: require( '../aiport-scrap-' + name )( options, query )
//     });

module.exports = name => 
    require( '../aiport-scrap-' + name );
