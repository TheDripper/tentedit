import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 
const { RichText } = wp.editor;

registerBlockType( 'tyty/cols', {
	title: __( 'COLS' ), 
	icon: 'shield', 
	category: 'common', 
	keywords: [
		'ad'
	],
	attributes: {
		one: {
			type: 'string',
			source: 'text',
			selector: '.one'
		},
		two: {
			type: 'string',
			source: 'text',
			selector: '.two'
		},
		three: {
			type: 'string',
			source: 'text',
			selector: '.three'
		},
		four: {
			type: 'string',
			source: 'text',
			selector: '.four'
		},
		cols: {
			type: 'number'
		}
	},
	edit: function( props ) {
		function onChangeOne(tent) {
			props.setAttributes({one:tent});
		}
		function onChangeTwo(tent) {
			props.setAttributes({two:tent});
		}
		function onChangeThree(tent) {
			props.setAttributes({three:tent});
		}
		function onChangeFour(tent) {
			props.setAttributes({four:tent});
		}
		function setCols(event) {
			let val = Number(event.target.value);
			props.setAttributes({cols:val});
			console.log(props);
		}
		return (
			<div className={ props.className }>
			<div className="trols">
				<input type="number" onChange={setCols} value={props.attributes.cols} className="setCols"  />	
			</div>
			<div className="cols">
				<div className="col">
					<RichText tagName="div" className="one" onChange={onChangeOne} placeholder="one" value={props.attributes.one} />
				</div>
				<div className="col">
					<RichText tagName="div" className="two" onChange={onChangeTwo} placeholder="two" value={props.attributes.two} />
				</div>
				<div className="col">
					<RichText tagName="div" className="three" onChange={onChangeThree} placeholder="three" value={props.attributes.three} />
				</div>
				<div className="col">
					<RichText tagName="div" className="four" onChange={onChangeFour} placeholder="four" value={props.attributes.four} />
				</div>
			</div>
			</div>
		);
	},

	save: function( props ) {
		return (
			<div className="cols" data-cols={props.attributes.cols}>
				<div className="one">{props.attributes.one}</div>
			</div>
		);
	},
} );
