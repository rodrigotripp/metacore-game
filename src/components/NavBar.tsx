import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

export default function NavBar() {
  return (
    <Navbar className="bg-black text-zinc-50 ">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand>
        <p className="text-zinc-50 text-inherit font-bold">METACORE</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 text-zinc-50"
        justify="center"
      >
        <NavbarItem />
        <NavbarItem isActive>
          <Link href="/" aria-current="page" isDisabled>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-zinc-50" href="/" isDisabled>
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/" isDisabled>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
