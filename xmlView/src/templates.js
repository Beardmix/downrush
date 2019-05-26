var empty_kit_temp = `<?xml version="1.0" encoding="UTF-8"?>
<?xml version="1.0" encoding="UTF-8"?>
<kit>
	<lpfMode>24dB</lpfMode>
	<modFXType>flanger</modFXType>
	<modFXCurrentParam>feedback</modFXCurrentParam>
	<currentFilterType>lpf</currentFilterType>
	<defaultParams>
		<delay>
			<rate>0x00000000</rate>
			<feedback>0x80000000</feedback>
		</delay>
		<reverbAmount>0x80000000</reverbAmount>
		<volume>0x3504F334</volume>
		<pan>0x00000000</pan>
		<lpf>
			<frequency>0x7FFFFFFF</frequency>
			<resonance>0x00000000</resonance>
		</lpf>
		<hpf>
			<frequency>0x80000000</frequency>
			<resonance>0xC0000000</resonance>
		</hpf>
		<modFXDepth>0x00000000</modFXDepth>
		<modFXRate>0xE0000000</modFXRate>
		<stutterRate>0x00000000</stutterRate>
		<sampleRateReduction>0x80000000</sampleRateReduction>
		<bitCrush>0x80000000</bitCrush>
		<equalizer>
			<bass>0x00000000</bass>
			<treble>0x00000000</treble>
			<bassFrequency>0x00000000</bassFrequency>
			<trebleFrequency>0x00000000</trebleFrequency>
		</equalizer>
		<modFXOffset>0x00000000</modFXOffset>
		<modFXFeedback>0x80000000</modFXFeedback>
	</defaultParams>
	<soundSources>
	</soundSources>
	<selectedDrumIndex>0</selectedDrumIndex>
</kit>`;

var empty_sound_temp = `		<sound>
			<name>{{name}}</name>
			<osc1>
				<type>sample</type>
				<transpose>0</transpose>
				<cents>0</cents>
				<loopMode>1</loopMode>
				<reversed>0</reversed>
				<timeStretchEnable>0</timeStretchEnable>
				<timeStretchAmount>0</timeStretchAmount>
				<fileName>{{fileName}}</fileName>
				<zone>
					<startMilliseconds>0</startMilliseconds>
					<endMilliseconds>-1</endMilliseconds>
				</zone>
			</osc1>
			<osc2>
				<type>sample</type>
				<transpose>0</transpose>
				<cents>0</cents>
				<loopMode>1</loopMode>
				<reversed>0</reversed>
				<timeStretchEnable>0</timeStretchEnable>
				<timeStretchAmount>0</timeStretchAmount>
				<fileName></fileName>
				<zone>
					<startMilliseconds>0</startMilliseconds>
					<endMilliseconds>0</endMilliseconds>
				</zone>
			</osc2>
			<polyphonic>0</polyphonic>
			<clippingAmount>0</clippingAmount>
			<voicePriority>1</voicePriority>
			<lfo1>
				<type>sine</type>
				<syncLevel>0</syncLevel>
			</lfo1>
			<lfo2>
				<type>sine</type>
			</lfo2>
			<mode>subtractive</mode>
			<unison>
				<num>1</num>
				<detune>8</detune>
			</unison>
			<compressor>
				<syncLevel>6</syncLevel>
				<attack>327244</attack>
				<release>936</release>
			</compressor>
			<delay>
				<pingPong>1</pingPong>
				<analog>0</analog>
				<syncLevel>7</syncLevel>
			</delay>
			<lpfMode>24dB</lpfMode>
			<modFXType>none</modFXType>
			<defaultParams>
				<arpeggiatorGate>0x00000000</arpeggiatorGate>
				<portamento>0x80000000</portamento>
				<compressorShape>0xDC28F5B2</compressorShape>
				<oscAVolume>0x7FFFFFFF</oscAVolume>
				<oscAPulseWidth>0x00000000</oscAPulseWidth>
				<oscBVolume>0x80000000</oscBVolume>
				<oscBPulseWidth>0x00000000</oscBPulseWidth>
				<noiseVolume>0x80000000</noiseVolume>
				<volume>0x4CCCCCA8</volume>
				<pan>0x00000000</pan>
				<lpfFrequency>0x7FFFFFFF</lpfFrequency>
				<lpfResonance>0x00000000</lpfResonance>
				<hpfFrequency>0x80000000</hpfFrequency>
				<hpfResonance>0x80000000</hpfResonance>
				<envelope1>
					<attack>0x80000000</attack>
					<decay>0xE6666654</decay>
					<sustain>0x7FFFFFD2</sustain>
					<release>0x80000000</release>
				</envelope1>
				<envelope2>
					<attack>0xE6666654</attack>
					<decay>0xE6666654</decay>
					<sustain>0xFFFFFFE9</sustain>
					<release>0xE6666654</release>
				</envelope2>
				<lfo1Rate>0x1999997E</lfo1Rate>
				<lfo2Rate>0x00000000</lfo2Rate>
				<modulator1Amount>0x80000000</modulator1Amount>
				<modulator1Feedback>0x80000000</modulator1Feedback>
				<modulator2Amount>0x80000000</modulator2Amount>
				<modulator2Feedback>0x80000000</modulator2Feedback>
				<carrier1Feedback>0x80000000</carrier1Feedback>
				<carrier2Feedback>0x80000000</carrier2Feedback>
				<modFXRate>0x00000000</modFXRate>
				<modFXDepth>0x00000000</modFXDepth>
				<delayRate>0x00000000</delayRate>
				<delayFeedback>0x80000000</delayFeedback>
				<reverbAmount>0x80000000</reverbAmount>
				<arpeggiatorRate>0x00000000</arpeggiatorRate>
				<patchCables>
					<patchCable>
						<source>velocity</source>
						<destination>volume</destination>
						<amount>0x3FFFFFE8</amount>
					</patchCable>
				</patchCables>
				<stutterRate>0x00000000</stutterRate>
				<sampleRateReduction>0x80000000</sampleRateReduction>
				<bitCrush>0x80000000</bitCrush>
				<equalizer>
					<bass>0x00000000</bass>
					<treble>0x00000000</treble>
					<bassFrequency>0x00000000</bassFrequency>
					<trebleFrequency>0x00000000</trebleFrequency>
				</equalizer>
				<modFXOffset>0x00000000</modFXOffset>
				<modFXFeedback>0x00000000</modFXFeedback>
			</defaultParams>
			<midiKnobs>
			</midiKnobs>
			<modKnobs>
				<modKnob>
					<controlsParam>pan</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>volumePostFX</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>lpfResonance</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>lpfFrequency</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>env1Release</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>env1Attack</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>delayFeedback</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>delayRate</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>reverbAmount</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>volumePostReverbSend</controlsParam>
					<patchAmountFromSource>compressor</patchAmountFromSource>
				</modKnob>
				<modKnob>
					<controlsParam>pitch</controlsParam>
					<patchAmountFromSource>lfo1</patchAmountFromSource>
				</modKnob>
				<modKnob>
					<controlsParam>lfo1Rate</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>pitch</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>stutterRate</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>bitcrushAmount</controlsParam>
				</modKnob>
				<modKnob>
					<controlsParam>sampleRateReduction</controlsParam>
				</modKnob>
			</modKnobs>
		</sound>`;

export {empty_sound_temp, empty_kit_temp};