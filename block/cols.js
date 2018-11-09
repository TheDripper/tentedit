import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 

registerBlockType( 'cgb/cols', {
	title: __( 'cols' ), 
	icon: 'shield', 
	category: 'common', 
	keywords: [
		'col'
	],
	attrbutes: {
		colz: {
			type: 'number',
			source: 'attribute',
			selector: '.colz',
			attribute: 'data-colz'
		}
	},
	edit: function( props ) {
    		function onChange( event ) {
    		    props.setAttributes( { colz: event.target.value } );
    		}
		return (
			<div className={ props.className } data-colz={props.attributes.colz}>
				<input type="number" id="colz" onChange={onChange} />
			</div>
		);
	},

	save: function( props ) {
		return (
			<div className="colz" data-colz={props.attributes.colz}>
			</div>
		);
	},
} );
