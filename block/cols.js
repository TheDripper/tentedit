import './style.scss';
import './editor.scss';

const { registerBlockType } = wp.blocks; 
const { RichText } = wp.editor;

registerBlockType( 'cgb/cols', {
	title: 'cols', 
	icon: 'shield', 
	category: 'common', 
	keywords: [
		'col'
	],
	attrbutes: {
		colz: {
			type: 'number',
			source: 'attribute',
			selector: '.case',
			default: 2
		},
		one: {
			type: 'string'
		}
	},
	edit: function( props ) {
    		function onChange( event ) {
    		    props.setAttributes( { colz: event.target.value } );
    		}
		function onChangeOne(content) {
			props.setAttributes({ one: content});
		}
		var cols = [];
		let names = ['one','two','three','four'];
		for (var i=0; i<props.attributes.colz; i++) {
			let name = names[i];
			cols.push(<div data-col={i}><RichText className={name} onChange={onChangeOne}  value={props.attributes.one} /></div>);
		}
		return (
			<div className="case" data-colz={props.attributes.colz}>
				<div class="trols" >
					<label>Number of Columns</label>
					<input type="number" id="colz" onChange={onChange} />
				</div>
				<div className={ props.className } >
					{cols}
				</div>
			</div>
		);
	},

	save: function( props ) {
		var cols = [];
		let names = ['one','two','three','four'];
		for (var i=0; i<props.attributes.colz; i++) {
			cols.push(<div className="col">{props.attributes.one}</div>)
		}
		return (
			<div className="colz" data-colz={props.attributes.colz}>
			{cols}
			</div>
		);
	},
} );
