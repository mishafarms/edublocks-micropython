export default function define(Python: Blockly.BlockGenerators) {
  Python['import_machine'] = () => {
    Blockly.Python.definitions_['import_machine'] = 'import machine\n';
    return '';
  };

  Python['import_neopixel'] = () => {
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel\n';
    return '';
  };

  Python['pin_in_declare'] = (block) => {
    const pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
    const pull_up_down = block.getFieldValue('pull_up_down');
    Blockly.Python.definitions_['import_machine'] = 'import machine\n';

    let code = `machine.Pin(${pin_number}, machine.Pin.IN, machine.Pin.${pull_up_down})\n`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['pin_out_declare'] = (block) => {
    const pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_machine'] = 'import machine\n';

    let code = `machine.Pin(${pin_number}, machine.Pin.OUT)\n`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['pin_value_get'] = (block) => {
    const pin_name = Blockly.Python.valueToCode(block, 'pin_name', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_machine'] = 'import machine\n';

    let code = `${pin_name}.value()\n`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['pin_value_set'] = (block) => {
    const pin_name = Blockly.Python.valueToCode(block, 'pin_name', Blockly.Python.ORDER_ATOMIC);
    const value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_machine'] = 'import machine\n';

    let code = `${pin_name}.value(${value})\n`;
    return code;
  };

  Python['neopixel_declare'] = (block) => {
    const pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
    const length = Blockly.Python.valueToCode(block, 'length', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel\n';

    let code = `neopixel.NeoPixel(${pin_number}, ${length})\n`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['led_colour_set'] = (block) => {
    const functionName = Blockly.Python.provideFunction_(
        'convert_rgb',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(colour):',
          '  if isinstance(colour, str) and len(colour) == 7:',
          '     r = int(colour[1:3], 16)',
          '     g = int(colour[3:5], 16)',
          '     b = int(colour[5:7], 16)',
          '  elif isinstance(colour, tuple):',
          '    r, g, b = colour',
          '  else:',
          '     r, g, b = 0, 0, 0',
          '  return r, g, b']);
    const np_name = Blockly.Python.valueToCode(block, 'np_name', Blockly.Python.ORDER_ATOMIC);
    const index = Blockly.Python.getAdjustedInt(block, 'index');
    const colour1 = Blockly.Python.valueToCode(block, 'colour1', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel\n';

    const code = np_name + '[' + index + '] = ' + functionName + '(' + colour1 + ') # Colour = ' + colour1 + '\n';
    return code;
  };

  Python['neopixel_write'] = (block) => {
    const np_name = Blockly.Python.valueToCode(block, 'np_name', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel\n';

    return `${np_name}.write()\n`;
  };
}
