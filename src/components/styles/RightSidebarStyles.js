import styled from '@emotion/styled';

export const Sidebar = styled('aside')`
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 24px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;

  // background: ${props => props.theme.colors.background};

  .rightSideBarUL {
    margin-top: 344px;
  }

  .rightSideBarUL li {
    list-style-type: none;
    border-left: 1px solid #e2e2e2;
  }

  .rightSideBarUL li a {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
    padding: 7px 24px 7px 16px;
  }

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

export const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props}>
        {props.children}
      </a>
    </li>
  );
})`
  list-style: none;

  a {
    color: #636363;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    // padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      font-weight: 700 !important;
      color: #131313 !important;
      border-left: 1px solid #131313;
    }

    ${props =>
      props.active &&
      `
      font-weight: 700 !important;
      color: #131313 !important;
      border-color: #131313 !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;
