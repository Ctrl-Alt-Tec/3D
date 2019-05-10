/**
 * @author mrdoob / http://mrdoob.com/
 */

Sidebar.Properties = function ( editor ) {

	var signals = editor.signals;
	var strings = editor.strings;

	var container = new UI.Span();

	var objectTab = new UI.Text( strings.getKey( 'sidebar/properties/object' ) ).setTextTransform( 'uppercase' );
	objectTab.onClick( function () { select( 'OBJECT' ) } );

	var geometryTab = new UI.Text( strings.getKey( 'sidebar/properties/geometry' ) ).setTextTransform( 'uppercase' );
	geometryTab.onClick( function () { select( 'GEOMETRY' ) } );

	var materialTab = new UI.Text( strings.getKey( 'sidebar/properties/material' ) ).setTextTransform( 'uppercase' );
	materialTab.onClick( function () { select( 'MATERIAL' ) } );
	
	var animationTab = new UI.Text( strings.getKey( 'sidebar/properties/animation' ) ).setTextTransform( 'uppercase' );
	animationTab.onClick( function () { select( 'ANIMATION' ) } );
	
	var fontTab = new UI.Text( strings.getKey( 'sidebar/properties/font' ) ).setTextTransform( 'uppercase' ).setDisplay('none');
	
	var tabs = new UI.Div();
	tabs.setId( 'tabs' );
	tabs.add( objectTab, objectTab, geometryTab, materialTab, fontTab );
	container.add( tabs );

	//

	var object = new UI.Span().add(
		new Sidebar.Object( editor )
	);
	container.add( object );

	var geometry = new UI.Span().add(
		new Sidebar.Geometry( editor )
	);
	container.add( geometry );

	var material = new UI.Span().add(
		new Sidebar.Material( editor )
	);
	container.add( material );

	var animation = new UI.Span().add(
		new Sidebar.Animation( editor )
	);
	container.add( animation );

	//

	function select( section ) {

		objectTab.setClass( '' );
		geometryTab.setClass( '' );
		materialTab.setClass( '' );
		animationTab.setClass( '' );
		
		object.setDisplay( 'none' );
		geometry.setDisplay( 'none' );
		material.setDisplay( 'none' );
		animation.setDisplay( 'none' );
		
		switch ( section ) {
			case 'OBJECT':
				objectTab.setClass( 'selected' );
				object.setDisplay( '' );
				break;
			case 'GEOMETRY':
				geometryTab.setClass( 'selected' );
				geometry.setDisplay( '' );
				break;
			case 'MATERIAL':
				materialTab.setClass( 'selected' );
				material.setDisplay( '' );
				break;
			case 'ANIMATION':
				animationTab.setClass( 'selected' );
				animation.setDisplay( '' );
				break;
		}

	}

	select( 'OBJECT' );
	
	//
	
	editor.signals.objectSelected.add(function(obj){
		if(obj.geometry.type == "TextGeometry" && obj){
			fontTab.setDisplay('');
		}else{
			fontTab.setDisplay('none');
		}
	})

	return container;

};
