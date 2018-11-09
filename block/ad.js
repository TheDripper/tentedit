import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 

registerBlockType( 'tyty/ad', {
	title: __( 'Web Ad' ), 
	icon: 'shield', 
	category: 'common', 
	keywords: [
		'ad'
	],


	edit: function( props ) {
		return (
			<div className={ props.className }>
				<h1>WEB AD</h1>
			</div>
		);
	},

	save: function( props ) {
		return (
			<div className="shell">
				<div className="ad">
				<h1>WEB AD</h1>
				</div>
			</div>
		);
	},
} );
