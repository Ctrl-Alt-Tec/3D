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
	container.setDisplay( 'none' );
  
  container.add(new UI.Text('qwertyuiop'));
  
  return container;
 }
