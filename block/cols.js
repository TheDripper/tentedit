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
		let cols = [];
		let names = ['one','two','three','four'];
		let funcs = ['oneChangeOne','onChangeTwo','onChangeThree','onChangeFour'];
		for(var i = 0; i<props.attributes.cols; i++) {
			cols.push(<div className="col"><RichText tagName="div" className={names[i]} onChange={funcs[i]} placeholder={names[i]} value={props.attributes[names[i]]} /></div>);
		}
		return (
			
			<div className={ props.className }>
			<div className="trols">
				<input type="number" onChange={setCols} value={props.attributes.cols} className="setCols"  />	
			</div>
			<div className="cols">
				{cols}
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
