/**
 * @author edvilme/CTRL+ALT+TEC
 */
 
 Sidebar.Text = function(editor){
  var strings = editor.strings;

	var signals = editor.signals;

	var currentObject;
  
  var container = new UI.Panel();
  container.setBorderTop( '0' );
	container.setPaddingTop( '20px' );
  
	// Edit text
	
	var textRow = new UI.Row();
	var objectText = new UI.Input().setWidth( '100%' ).setFontSize( '24px' ).onChange( function () {
		editor.selected.geometry = new THREE.TextGeometry(objectText.getValue(), editor.selected.geometry.parameters.parameters)
		editor.execute( new AddObjectCommand( editor.selected ) );
	} );
	textRow.add(objectText)
	//
	container.add(textRow)
	 
  container.add(new UI.Text('qwertyuiop'));
  
  return container;
 }
