import SiteShell from '../components/SiteShell';
import { DEFAULT_LOCALE } from '@/lib/constants';

export default function UkLayout({ children }) {
	return <SiteShell lang={DEFAULT_LOCALE}>{children}</SiteShell>;
}
