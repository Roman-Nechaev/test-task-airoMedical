import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MdOutlineBookmarkBorder, MdOutlineBookmark } from 'react-icons/md';

export const Container = styled.div`
  :nth-child(5n + 1) {
    scroll-snap-align: start;
  }
`;

export const LinkSt = styled(Link)`
  display: flex;

  color: #ffffff;
  min-width: 650px;
  max-height: 80px;

  border-radius: 5px;

  overflow: hidden;
  margin: 0 auto;

  cursor: pointer;
  transition: 0.5s;

  :hover,
  :focus {
    background-color: #00619a;
    box-shadow: 0px 6px 22px 3px rgba(0, 208, 255, 0.73);
  }
`;

export const ListItem = styled.div`
  position: relative;
  margin: 10px;
  padding: 5px;

  border: 1px solid rgb(255, 255, 255);
  overflow: hidden;
  border-radius: 10px;

  transition: 0.5s;

  :hover,
  :focus {
    background-color: #00619a;
    box-shadow: 0px 6px 22px 3px rgba(0, 208, 255, 0.73);
  }
`;

export const ItemImg = styled.img`
  width: 94px;
  min-width: 55px;

  height: 100%;
  height: 125px;
`;

export const Details = styled.div`
  display: flex;
  padding: 10px;

  flex-wrap: wrap;
`;

export const Title = styled.h2`
  font-size: 1em;
  color: #ffffff;
  margin-bottom: 3px;
`;

export const WrapperBtnFollowing = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: -2px;
  right: 50px;
`;

export const Bookmark = styled(MdOutlineBookmarkBorder)`
  color: #ffffff;
  width: 25px;
  height: 25px;
  transition: 0.5s;

  cursor: pointer;

  :hover {
    color: #3cd95b;
  }
`;

export const BookmarkOk = styled(MdOutlineBookmark)`
  color: #ffffff;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    color: #ff3300;
  }
`;
