import styled from 'styled-components';
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from 'react-icons/md';

export const Bookmark = styled(MdOutlineBookmarkBorder)`
  color: #ffffff;
  width: 100%;
  height: 100%;
  transition: 0.5s;

  cursor: pointer;

  :hover {
    color: #3cd95b;
  }
`;

export const BookmarkOk = styled(MdOutlineBookmark)`
  color: #ffffff;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    color: #ff3300;
  }
`;
