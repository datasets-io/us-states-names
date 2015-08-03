/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	list = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-us-states-names', function tests() {

	it( 'should export an array', function test() {
		expect( list ).to.be.an( 'array' );
		assert.strictEqual( list.length, 50 );
	});

	it( 'should only consist of strings', function test() {
		var len = list.length,
			i;

		for ( i = 0; i < len; i++ ) {
			assert.isString( list[ i ], i );
		}
	});

});
