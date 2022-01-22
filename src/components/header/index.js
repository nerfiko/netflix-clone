import React from "react";
import { Link as ReactRouterLink } from 'react-router-dom';

import { Background, ButtonLink, Container, Logo, Feature, Text, FeatureCallOut, Link, Group, Picture, Profile, Dropdown } from './styles/header';

export default function Header({ bg = true, children, ...restProps }){
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFunction({children, ...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.Frame = function HeaderFrame({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Picture = function HeaderPicture({src, ...restProps}){
    return <Picture {...restProps} src={'/images/users/${src}.png'} />
}

Header.Profile = function HeaderProfile({ children, ...restProps }){
    return <Profile {...restProps}>{children}</Profile>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
}


Header.Text = function HeaderText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}
Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Header.ButtonLink = function HeaderLink({children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }){
    return (
        <ReactRouterLink to={to}>
            <Logo{...restProps} />
        </ReactRouterLink>
    )
}