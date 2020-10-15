import fs = require('fs');
import path = require('path');

let toolBoxXml = '';

toolBoxXml += '<xml>';

import basicDefs from './basic/definitions';
import basicGens from './basic/generators';
basicDefs(Blockly.Blocks);
basicGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'basic', 'toolbox.xml'));

import esp32Defs from './esp32/definitions';
import esp32Gens from './esp32/generators';
esp32Defs(Blockly.Blocks);
esp32Gens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'esp32', 'toolbox.xml'));

import ottoDefs from './otto/definitions';
import ottoGens from './otto/generators';
ottoDefs(Blockly.Blocks);
ottoGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'otto', 'toolbox.xml'));

// add the builtin blocks
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'builtin', 'toolbox.xml'));

// add variables and functions to the end
toolBoxXml += '<category name="Variables" custom="VARIABLE" colour="330">\n</category>\n';
toolBoxXml += '<category name="Functions" custom="PROCEDURE"  colour="290">\n</category>\n';

// import gpiozeroDefs from './gpiozero/definitions';
// import gpiozeroGens from './gpiozero/generators';
// gpiozeroDefs(Blockly.Blocks);
// gpiozeroGens(Blockly.Python as any);
// toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'gpiozero', 'toolbox.xml'));

// import advancedDefs from './advanced/definitions';
// import advancedGens from './advanced/generators';
// advancedDefs(Blockly.Blocks);
// advancedGens(Blockly.Python as any);
// toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'advanced', 'toolbox.xml'));

toolBoxXml += '</xml>';

function getToolBoxXml() {
  return toolBoxXml;
}

export {
  getToolBoxXml,
};
