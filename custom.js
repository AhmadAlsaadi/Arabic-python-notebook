define([
         'base/js/events'
     ], function(events) {
         events.on('app_initialized.NotebookApp', function(){
             IPython.keyboard_manager.command_shortcuts.add_shortcut('g', {
    handler : function (event) {
        var input = IPython.notebook.get_selected_cell().get_text();
        var cmd = "f = open('.toto.py', 'w');f.close()";
        if (input != "") {
            cmd = '%%writefile .toto.py\n' + input;
        }
        IPython.notebook.kernel.execute(cmd);
        cmd = "import os;os.system('gedit .toto.py')";
        IPython.notebook.kernel.execute(cmd);
        return false;
    }}
);

IPython.keyboard_manager.command_shortcuts.add_shortcut('u', {
    handler : function (event) {
        function handle_output(msg) {
            var ret = msg.content.text;
            IPython.notebook.get_selected_cell().set_text(ret);
        }
        var callback = {'output': handle_output};
        var cmd = "f = open('.toto.py', 'r');print(f.read())";
        IPython.notebook.kernel.execute(cmd, {iopub: callback}, {silent: false});
        return false;
    }}
);
         });
     });

