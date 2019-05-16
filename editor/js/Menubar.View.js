/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.View = function ( editor ) {
	var signals = editor.signals;
	var strings = editor.strings;


	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'View' );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// VR mode

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'VR mode' );
	option.onClick( function () {

		if ( WEBVR.isAvailable() === true ) {

			editor.signals.enterVR.dispatch();

		} else {

			alert( 'WebVR not available' );

		}

	} );
	options.add( option );
	
	
	// Show grid
	var showGrid = false;
	var option = new UI.Row();
	option.setClass('option');
	option.setTextContent('Toggle grid');
	option.onClick(function(){
		signals.showGridChanged.dispatch(showGrid);
		showGrid = !showGrid;
	})
	options.add(option)
	
	/*var show = new UI.THREE.Boolean( true , "Show grid").onChange( update );
	options.add( show );
	function update() {
		signals.showGridChanged.dispatch( show.getValue() );
	}*/
	
	return container;

};
