import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 
const { RichText, MediaUpload, InspectorControls, BlockControls } = wp.editor;
const { Dropdown, Button } = wp.components;

registerBlockType( 'tyty/hero', {
	title: __( 'Hero' ), 
	icon: 'shield', 
	category: 'common', 
	keywords: [
		'ad'
	],
	attributes: {
		//blurb: {
		//	type: 'array',
		//	source: 'children',
		//	selector: '.blurb'
		//},
    		backgroundImage: {
    		    type: 'string',
    		    default: null, // no image by default!
    		},
		width: {
			type: 'string',
			default: 'full'
		}
	},
	edit: function( props ) {
		//function changeBlurb(tent) {
		//	props.setAttributes({blurb:tent});
		//}
		function setBack(mage) {
			props.setAttributes({backgroundImage:mage.url});
		}
		function setWidth(e) {
			props.setAttributes({width:e.target.dataset.opt});
		}

		return (
			<div className="shell">
			<div className={ props.className + " blurb " + props.attributes.width } style={{
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
    				<Dropdown
    				    className="widthcont"
    				    contentClassName="widthdrop"
    				    position="bottom right"
    				    renderToggle={ ( { isOpen, onToggle } ) => (
    				        <Button isPrimary onClick={ onToggle } aria-expanded={ isOpen }>
    				            Toggle Popover!
    				        </Button>
    				    ) }
    				    renderContent={ () => (
    				        <div>
					<div data-opt="full" class="opt" onClick={setWidth}>Full Width</div>
					<div data-opt="cont" class="opt" onClick={setWidth}>Constrained</div>
    				        </div>
    				    ) }
    				/>
				</InspectorControls>
		</div>
		</div>
		);
	},

	save: function( props ) {
		return (
		<div className="shell">
			<div className={ props.className + " " + props.attributes.width} style={{
					backgroundImage: `url(${props.attributes.backgroundImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}>
				<div className="blurb" style={"background-image:url("+props.attributes.back+")"} data-back={props.attributes.back}>
					<div className="tro">
					{props.attributes.blurb}
					</div>
				</div>
			</div>
		</div>
		);
	},
} );
