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
		blurb: {
			type: 'string',
			source: 'html',
			selector: '.blurbtext'
		},
		head: {
			type: 'string',
			source: 'text',
			selector: '.subHead'
		},
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
		function changeBlurb(tent) {
			props.setAttributes({blurb:tent});
		}
		function changeHead(tent) {
			props.setAttributes({head:tent});
		}
		function setBack(mage) {
			props.setAttributes({backgroundImage:mage.url});
		}
		function setWidth(e) {
			props.setAttributes({width:e.target.dataset.opt});
		}

		return (
			<div className={"edittopshell " + props.attributes.width}>
			<div className={ props.className + " blurb" } style={{
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
    				            Banner Width
    				        </Button>
    				    ) }
    				    renderContent={ () => (
    				        <div>
					<div data-opt="full" class="opt" onClick={setWidth}>Full Width</div>
					<div data-opt="art" class="opt" onClick={setWidth}>Constrained</div>
    				        </div>
    				    ) }
    				/>
				</InspectorControls>
				<div className="tro">
					<RichText tagName="h2" onChange={changeHead} className="subHead" placeholder="heading/title..." value={props.attributes.head} />
					<RichText onChange={changeBlurb} className="blurbtext" placeholder="blurb..." value={props.attributes.blurb} />
				</div>
		</div>
		</div>
		);
	},

	save: function( props ) {
		return (
		<div className={props.attributes.width + " topshell"}>
			<div className={ props.className + " blurb"} style={{
					backgroundImage: `url(${props.attributes.backgroundImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}>
					<div className="tro">
					<h2 className="subHead">{props.attributes.head}</h2>
					<div className="blurbtext">{props.attributes.blurb}</div>
					</div>
			</div>
		</div>
		);
	},
} );
