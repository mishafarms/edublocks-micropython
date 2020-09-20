export default function define(Python: Blockly.BlockGenerators) {
  Python['import_otto'] = () => {
    return 'import otto9\n';
  };

  Python['otto'] = (block) => {
    const otto = block.getFieldValue('Otto');
    return `${otto} = otto9.Otto9()\n`;
  };

  Python['otto_init'] = (block) => {
    const otto = block.getFieldValue('Otto');
    const yl = block.getFieldValue('YL');
    const yr = block.getFieldValue('YR');
    const rr = block.getFieldValue('RR');
    const rl = block.getFieldValue('RL');
    const load_calibration = block.getFieldValue('load_calibration');
    const noisesensor = block.getFieldValue('NoiseSensor');
    const buzzer = block.getFieldValue('Buzzer');
    const ustrigger = block.getFieldValue('USTrigger');
    const usecho = block.getFieldValue('USEcho');

    return `${otto}.init(${yl}, ${yr}, ${rl}, ${rr}, ${load_calibration}, ${noisesensor}, ${buzzer}, ${ustrigger}, ${usecho})\n`;
  };

  Python['otto_home'] = (block) => {
    const otto = block.getFieldValue('Otto');
    return `${otto}.home()\n`;
  };

  Python['otto_calibrate'] = (block) => {
    const otto = block.getFieldValue('Otto');
    const ll = block.getFieldValue('LL');
    const rl = block.getFieldValue('RL');
    const lf = block.getFieldValue('LF');
    const rf = block.getFieldValue('RF');
    return `${otto}.setTrims(${ll}, ${rl}, ${lf}, ${rf})\n`;
  };

  Python['otto_eeprom'] = (block) => {
    const otto = block.getFieldValue('Otto');
    return `${otto}.saveTrimsOnEEPROM())\n`;
  };

  Python['otto_move'] = (block) => {
    const otto = block.getFieldValue('Otto');
    var otto_move = block.getFieldValue('otto_move');
    const otto_speed = block.getFieldValue('otto_speed');
    var code = '';

    switch(otto_move) {
	case 'FORWARD':
	code = `${otto}.walk(1, ${otto_speed}, 1)\n`;
	break;

	case 'BACKWARD':
	code = `${otto}.walk(1, ${otto_speed}, -1)\n`;
	break;

	case 'LEFT':
	code = `${otto}.turn(1, ${otto_speed}, 1)\n`;
	break;

	case 'RIGHT':
	code = `${otto}.turn(1, ${otto_speed}, -1)\n`;
	break;

	case 'BENDLEFT':
	code = `${otto}.bend(1, ${otto_speed}, 1)\n`;
	break;

	case 'BENDRIGHT':
	code = `${otto}.bend(1, ${otto_speed}, -1)\n`;
	break;

	case 'SHAKELEFT':
	code = `${otto}.shakeLeg(1, ${otto_speed}, 1)\n`;
	break;

	case 'SHAKERIGHT':
	code = `${otto}.shakeLeg(1, ${otto_speed}, -1)\n`;
	break;

	case 'jump':
	code = `${otto}.jump(1, ${otto_speed})\n`
	break;

    }

    return code;
  };

  Python['otto_walk'] = (block) => {
    const otto = block.getFieldValue('Otto');
    const steps = block.getFieldValue('steps');
    const time = block.getFieldValue('time');
    const dir = block.getFieldValue('dir');

    return `${otto}.walk(${steps}, ${time}, ${dir})\n`;
  };
}
