export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['import_machine'] = {
    init() {
      this.appendDummyInput()
        .appendField('import machine');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the machine library for GPIO access.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['import_neopixel'] = {
    init() {
      this.appendDummyInput()
        .appendField('import neopixel');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the neopixel library for LED control.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pin_in_declare'] = {
    init() {
      this.appendDummyInput()
        .appendField('machine.Pin(');
      this.appendValueInput('pin_number').setCheck('Number');
      this.appendDummyInput()
        .appendField(', machine.Pin.IN, machine.Pin.')
        .appendField(new Blockly.FieldDropdown([['PULL_UP', 'PULL_UP'], ['PULL_DOWN', 'PULL_DOWN']]), 'pull_up_down')
        .appendField(')');
      this.setInputsInline(true);
      this.setOutput(true, 'Number');
      this.setColour(120);
      this.setTooltip('Declare an input pin');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pin_out_declare'] = {
    init() {
      this.appendDummyInput()
        .appendField('machine.Pin(')
      this.appendValueInput('pin_number').setCheck('Number');
      this.appendDummyInput()
        .appendField(', machine.Pin.OUT)');
      this.setInputsInline(true);
      this.setOutput(true, 'Number');
      this.setColour(120);
      this.setTooltip('Declare an output pin');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pin_value_get'] = {
    init() {
      this.appendValueInput('pin_name').setCheck('String');
      this.appendDummyInput()
        .appendField('.value()');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(120);
      this.setTooltip('Get pin value');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pin_value_set'] = {
    init() {
      this.appendValueInput('pin_name').setCheck('String');
      this.appendDummyInput()
        .appendField('.value(');
      this.appendValueInput('value');
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Set pin value');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['neopixel_declare'] = {
    init() {
      this.appendDummyInput()
        .appendField('neopixel.NeoPixel(');
      this.appendValueInput('pin_number').setCheck('Number');
      this.appendDummyInput()
        .appendField(', ');
      this.appendValueInput('length').setCheck('Number');
      this.appendDummyInput()
        .appendField(')');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(120);
      this.setTooltip('Declare NeoPixel strip');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['led_colour_set'] = {
    init() {
      this.appendValueInput('np_name').setCheck('String');
      this.appendDummyInput()
        .appendField('[');
      this.appendValueInput('index').setCheck('Number');
      this.appendDummyInput()
        .appendField('] = (')
        .appendField(new Blockly.FieldColour('colour1'), 'colour1')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Set LED colour');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['neopixel_write'] = {
    init() {
      this.appendValueInput('np_name').setCheck('String');
      this.appendDummyInput()
        .appendField('.write()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Write the colours to the LED strip.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
}
