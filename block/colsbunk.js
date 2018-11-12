import './style.scss';
import './editor.scss';

const { registerBlockType } = wp.blocks; 
const { RichText, InnerBlocks } = wp.editor;

registerBlockType( 'cgb/cols', {
	title: 'cols', 
	category: 'common', 
	keywords: [
		'col'
	],
	edit: function() {
		return (
			<div>
				<InnerBlocks />
			</div>
		);
	},

	save: function() {
		return (
			<div>
			<InnerBlocks.content />
			</div>
		);
	},
} );
