import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 
const { RichText, MediaUpload, InspectorControls } = wp.editor;

registerBlockType( 'tyty/hero', {
	title: __( 'Hero' ), 
	icon: 'shield', 
	category: 'common', 
	keywords: [
		'ad'
	],
	attributes: {
		blurb: {
			type: 'array',
			source: 'children',
			selector: '.blurb'
		},
		back: {
			type: 'string',
			source: 'attribute',
			selector: '.blurb',
			attribute: 'data-back'
		},
    		backgroundImage: {
    		    type: 'string',
    		    default: null, // no image by default!
    		}
	},
	edit: function( props ) {
		function changeBlurb(tent) {
			props.setAttributes({blurb:tent});
		}
		function setBack(mage) {
			props.setAttributes({backgroundImage:mage.url});
		}

		return (
			<div className={ props.className } style={{
					backgroundImage: `url(${props.attributes.backgroundImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}>
				<InspectorControls>
				<div>
					<MediaUpload
        				    onSelect={setBack}
        				    type="image"
        				    value={props.attributes.backgroundImage} // make sure you destructured backgroundImage from props.attributes!
        				    render={({ open }) => (
        				        <button onClick={open}>
        				            Upload Image!
        				        </button>
        				    )}
        				/>
				</div>
				</InspectorControls>
				<RichText tagName="div" className="blurb" onChange={changeBlurb} placeholder="Blurb text here..." value={props.attributes.blurb} />
			</div>
		);
	},

	save: function( props ) {
		return (
			<div className={props.className}>
				<div className="blurb" style={"background-image:url("+props.attributes.back+")"} data-back={props.attributes.back}>
				{props.attributes.blurb}
				</div>
			</div>
		);
	},
} );
