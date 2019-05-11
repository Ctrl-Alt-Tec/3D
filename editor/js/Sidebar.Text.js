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
	var textRow;
	container.add(new UI.Text('Text value'));
	editor.signals.objectSelected.add(function(obj){ if(obj!=null && obj.geometry.type == "TextGeometry"){
		container.remove(textRow)
		textRow = new UI.Row();
		var objectText = new UI.Input(editor.selected.geometry.parameters.text).setWidth( '100%' ).setFontSize( '24px' ).onChange( function(){
			editor.selected.geometry = new THREE.TextGeometry(objectText.getValue(), editor.selected.geometry.parameters.parameters)
			editor.execute( new AddObjectCommand( editor.selected ) );
		} );
		textRow.add(objectText)
		container.add(textRow)
		
	}});
	 
	 
	
	//
	 
	container.add(new UI.HorizontalRule())
	 
	//
	var fontSizeRow;
	editor.signals.objectSelected.add(function(obj){ if(obj!=null && obj.geometry.type == "TextGeometry"){ 	 
		container.remove(fontSizeRow);
		fontSizeRow = new UI.Row();
		var fontSizee = new UI.Number( editor.selected.geometry.parameters.parameters.size).setWidth('calc(100% - 100px)').onChange( function(){
			editor.selected.geometry.parameters.parameters.size = fontSizee.getValue();
			editor.selected.geometry = new THREE.TextGeometry(editor.selected.geometry.parameters.text, editor.selected.geometry.parameters.parameters)
			editor.execute(new AddObjectCommand( editor.selected ))
		} )

		fontSizeRow.add( new UI.Text( strings.getKey( 'sidebar/text/fontsize' ) ).setWidth( '90px' ) );
		fontSizeRow.add(fontSizee);
		container.add(fontSizeRow);
	}});
  
  return container;
 }
