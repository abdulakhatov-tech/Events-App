import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently logo"
            width={128}
            height={38}
            style={{ width: 'auto', height: 'auto' }}
            priority={true}
          />
        </Link>

        <div className="flex w-32 justify-end gap-3">
          <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
