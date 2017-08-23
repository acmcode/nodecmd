/**
 * Created by lifubang on 2017/8/22.
 */
var cmd = require('../index');

function test() {
    cmd.printsth('This output is from nodecmd interface:\n');
    cmd.printsth(1234567890.123);
    cmd.printsth('\n');
    cmd.printsth('Hello workd.');
    cmd.printsth('\n');

    cmd.print('Please input 10 characters:');
    cmd.print(cmd.gets(10));

    cmd.printsth('Please input something:\n');
    var input = cmd.read_line();
    cmd.printsth('Your input is:\n');
    cmd.printsth(input);
    cmd.printsth('\n');

    cmd.print('Please input a int:');
    cmd.print(cmd.readInt());

    cmd.print('Please input a double:');
    cmd.print(cmd.readDouble());
}

module.exports = test;

if (require.main === module) {
    test();
}