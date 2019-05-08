/**
 * @author mrdoob / http://mrdoob.com/
 */

var Sidebar = function ( editor ) {

	var strings = editor.strings;

	var container = new UI.Panel();
	container.setId( 'sidebar' );

	//

	var sceneTab = new UI.Text( strings.getKey( 'sidebar/scene' ) ).setTextTransform( 'uppercase' );
	sceneTab.onClick( function () { select( 'SCENE' ) } );

	var projectTab = new UI.Text( strings.getKey( 'sidebar/project' ) ).setTextTransform( 'uppercase' );
	projectTab.onClick( function () { select( 'PROJECT' ) } );

	var tabs = new UI.Div();
	tabs.setId( 'tabs' );
	tabs.add( sceneTab, projectTab );
	container.add( tabs );

	//

	var scene = new UI.Span().add(
		new Sidebar.Scene( editor ),
		new Sidebar.Properties( editor ),
		new Sidebar.Animation( editor ),
		new Sidebar.Script( editor )
	);
	container.add( scene );

	var project = new UI.Span().add(
		new Sidebar.Project( editor ),
		new Sidebar.History( editor )
	);
	container.add( project );

	//

	function select( section ) {

		sceneTab.setClass( '' );
		projectTab.setClass( '' );

		scene.setDisplay( 'none' );
		project.setDisplay( 'none' );

		switch ( section ) {
			case 'SCENE':
				sceneTab.setClass( 'selected' );
				scene.setDisplay( '' );
				break;
			case 'PROJECT':
				projectTab.setClass( 'selected' );
				project.setDisplay( '' );
				break;
		}

	}

	select( 'SCENE' );

	return container;

};
