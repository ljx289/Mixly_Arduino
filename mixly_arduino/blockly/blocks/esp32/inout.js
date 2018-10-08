'use strict';

goog.provide('Blockly.Blocks.base');
goog.require('Blockly.Blocks');

Blockly.Blocks.base.HUE = 20//'#ae3838';//40;

Blockly.Blocks['inout_highlow'] = {
   init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), 'BOOL')
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_HIGHLOW);
  }
};

Blockly.Blocks.inout_digital_write = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_DIGITALWRITE_PIN)
        .setCheck(Number);
    this.appendValueInput("STAT")
        .appendField(Blockly.MIXLY_STAT)
        .setCheck([Number,Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.inout_digital_read = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_GET)
        .appendField(Blockly.MIXLY_Digital_PINMODEIN)
        .setCheck(Number);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_MACHINE_VALUE)
	this.setInputsInline(true);
    this.setOutput(true, [Boolean,Number]);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_DIGITAL_READ);
  }
};

Blockly.Blocks.inout_pwm_analog_write = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
	this.appendValueInput("PIN", Number)
        .appendField("PWM"+Blockly.MIXLY_Analog_PINMODEOUT)
        .setCheck(Number);
    this.appendValueInput("NUM", Number)
        .appendField(Blockly.MIXLY_VALUE2)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_WRITE_PY);
  }
};

Blockly.Blocks.inout_analog_write = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendValueInput("PIN", Number)
        .appendField("DAC"+Blockly.MIXLY_Analog_PINMODEOUT)
        .setCheck(Number);
    this.appendValueInput("NUM", Number)
        .appendField(Blockly.MIXLY_VALUE2)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_WRITE);
  }
};

Blockly.Blocks.inout_analog_write_set = {
    init: function(){
        this.setColour(Blockly.Blocks.base.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_Analog_PINMODEOUT)
            .setCheck(Number);
        this.appendDummyInput()
           .appendField(Blockly.MIXLY_MICROBIT_JS_PERIOD_MIL)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXLY_mSecond, "period"],
                [Blockly.MIXLY_uSecond, "period_microseconds"]
            ]), "key");
        this.appendValueInput("NUM", Number)
            .appendField(Blockly.MIXLY_STAT)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_WRITE_SET);
    }
};

Blockly.Blocks.inout_analog_write_set_freq = {
    init: function(){
        this.setColour(Blockly.Blocks.base.HUE);
        this.appendValueInput("PIN", Number)
            .appendField("PWM"+Blockly.MIXLY_Analog_PINMODEOUT)
            .setCheck(Number);
        this.appendValueInput("NUM", Number)
            .appendField(Blockly.MIXLY_FREQUENCY + Blockly.MIXLY_STAT)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_WRITE_SET_FREQ);
    }
};

Blockly.Blocks.inout_analog_read = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_GET)
        .appendField(Blockly.MIXLY_Analog_PINMODEIN)
        .setCheck(Number);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_MACHINE_VALUE)
	this.setInputsInline(true);
	this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
  }
};

Blockly.Blocks['pin_pressed'] = {
    init: function(){
        this.setColour(Blockly.Blocks.base.HUE);
        this.appendValueInput('pin')
            .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_GET)
            .appendField(Blockly.MIXLY_ESP32_TOUCH_SENSOR);
        // this.appendDummyInput()
        //     .appendField(Blockly.MIXLY_IS_TOUCHED);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_ESP32_MACHINE_VALUE)
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_sensor_pin_pressed);
    }
};

Blockly.Blocks.inout_digital_write = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendValueInput("PIN",Number)
        .appendField(Blockly.MIXLY_Digital_PINMODEOUT)
        .setCheck(Number);
    this.appendValueInput("STAT")
        .appendField(Blockly.MIXLY_STAT)
        .setCheck([Number,Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['inout_pinMode'] = {
    init: function() {
        this.setColour(20);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_SETUP)
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_MODE+Blockly.Msg.LISTS_SET_INDEX_INPUT_TO)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_Digital_PINMODEOUT, "Pin.OUT"], 
                [Blockly.MIXLY_Digital_PINMODEIN, "Pin.IN"],
                [Blockly.MIXLY_PINMODEPULLUP, "Pin.IN, Pin.PULL_UP"],
                [Blockly.MIXLY_PINMODEPULLDOWN, "Pin.IN, Pin.PULL_DOWN"]
                ]),"MODE")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
  }
};



Blockly.Blocks.controls_pin_attachInterrupt = {
  init: function() {
    this.setColour(20);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_ATTACHINTERRUPT_PIN)
        .setCheck(Number);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_MODE)
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_RISING, "Pin.IRQ_RISING"], [Blockly.MIXLY_FALLING, "Pin.IRQ_FALLING"], [Blockly.MIXLY_CHANGE, "(Pin.IRQ_RISING or Pin.IRQ_FALLING)"]]), "mode");
    this.appendStatementInput('DO')
        .appendField(Blockly.MIXLY_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ATTACHINTERRUPT);
  }
};

Blockly.Blocks.inout_pwm_analog_write_init = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_SETUP)
        .appendField("PWM"+Blockly.MIXLY_Analog_PINMODEOUT)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_WRITE_PY);
  }
};

Blockly.Blocks.inout_analog_write_init = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_SETUP)
        .appendField("DAC"+Blockly.MIXLY_Analog_PINMODEOUT)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_WRITE);
  }
};
Blockly.Blocks.inout_analog_read_init = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_SETUP)
        .appendField(Blockly.MIXLY_Analog_PINMODEIN)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_READ);
  }
};
Blockly.Blocks['pin_pressed_init'] = {
    init: function(){
        this.setColour(Blockly.Blocks.base.HUE);
        this.appendValueInput('pin')
            .appendField(Blockly.MIXLY_SETUP)
            .appendField(Blockly.MIXLY_ESP32_TOUCH_SENSOR);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_sensor_pin_pressed);
    }
};

