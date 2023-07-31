import IconSprite from '../../components/IconSprite';
import { ButtonLink } from '../../components/Button/Button';
import styles from './Footer.module.scss';
import mediaSprite from '../../assets/svg/media-sprite.svg';
import sprite from '../../assets/svg/icons-sprite.svg';
import amazonLogo from '../../assets/svg/amazon-logo.svg';
import scssVars from '../../styles/vars.module.scss';


const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.media}>
				<ButtonLink
					href='http://tiktok.com'
					borderRadius='50%'
					paddingTB={12}
					paddingLR={12}
				>
					<IconSprite
						sprite={mediaSprite}
						fillColor={scssVars.colorMain}
						id='tiktok'
						width={24}
						height={24}
					/>
				</ButtonLink>

				<ButtonLink
					href='http://instagram.com'
					borderRadius='50%'
					paddingTB={12}
					paddingLR={12}
				>
					<IconSprite
						sprite={mediaSprite}
						fillColor={scssVars.colorMain}
						id='instagram'
						width={24}
						height={24}
					/>
				</ButtonLink>

				<ButtonLink
					href='http://twitter.com'
					borderRadius='50%'
					paddingTB={12}
					paddingLR={12}
				>
					<IconSprite
						sprite={mediaSprite}
						fillColor={scssVars.colorMain}
						id='twitter'
						width={24}
						height={24}
					/>
				</ButtonLink>

				<ButtonLink
					href='http://youtube.com'
					borderRadius='50%'
					paddingTB={12}
					paddingLR={12}
				>
					<IconSprite
						sprite={mediaSprite}
						fillColor={scssVars.colorMain}
						id='youtube'
						width={24}
						height={24}
					/>
				</ButtonLink>

				<ButtonLink
					href='http://facebook.com'
					borderRadius='50%'
					paddingTB={12}
					paddingLR={12}
				>
					<IconSprite
						sprite={mediaSprite}
						fillColor={scssVars.colorMain}
						id='facebook'
						width={24}
						height={24}
					/>
				</ButtonLink>
			</div>
			<div className={styles.links1}>
				<a href='#'>
					Help
					<IconSprite
						sprite={sprite}
						id='link-icon'
						fillColor={scssVars.colorMain}
						width={10}
						height={10}
					/>
				</a>
				<a href='#'>
					Site Index
					<IconSprite
						sprite={sprite}
						id='link-icon'
						fillColor={scssVars.colorMain}
						width={10}
						height={10}
					/>
				</a>
				<a href='#'>
					IMDbPro
					<IconSprite
						sprite={sprite}
						id='link-icon'
						fillColor={scssVars.colorMain}
						width={10}
						height={10}
					/>
				</a>
				<a href='#'>
					Box Office Mojo
					<IconSprite
						sprite={sprite}
						id='link-icon'
						fillColor={scssVars.colorMain}
						width={10}
						height={10}
					/>
				</a>
				<a href='#'>
					IMDb Developer
					<IconSprite
						sprite={sprite}
						id='link-icon'
						fillColor={scssVars.colorMain}
						width={10}
						height={10}
					/>
				</a>
				<a href='#'>
					Press Room
					<IconSprite
						sprite={sprite}
						id='link-icon'
						fillColor={scssVars.colorMain}
						width={10}
						height={10}
					/>
				</a>
			</div>
			<div className={styles.links2}>
				<a href='#'>Advertising</a>
				<a href='#'>
					Jobs
					<IconSprite
						sprite={sprite}
						id='link-icon'
						fillColor={scssVars.colorMain}
						width={10}
						height={10}
					/>
				</a>
				<a href='#'>
					Conditions of Use
					<IconSprite
						sprite={sprite}
						id='link-icon'
						fillColor={scssVars.colorMain}
						width={10}
						height={10}
					/>
				</a>
				<a href='#'>Privacy Policy</a>
				<div className='d-flex'>
					<a href='#'>
						<IconSprite
							sprite={sprite}
							id='privacy-choices'
							width={40}
							height={20}
						/>
					</a>
					<a href='#'>Your Ads Privacy Choices</a>
				</div>
			</div>
			<div className={styles.amazonLogo}>
				<img src={amazonLogo} alt='Amazon logo' />
			</div>
			<p className={styles.copyright}>© 1990-2023 by IMDb.com, Inc.</p>
		</footer>
	);
};

export default Footer;
