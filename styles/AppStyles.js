import styled from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Well } from '@zendeskgarden/react-notifications';
import { SM } from '@zendeskgarden/react-typography';
import { OrderedList } from '@zendeskgarden/react-typography';

export const Sidebar = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 12px;
`;

export const ContextLine = styled(SM)`
  display: block;
  margin: 0 0 12px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
`;

export const PanelContent = styled.div`
  min-width: 0;
  padding: 4px 0 8px;
`;

export const ProcessWell = styled(Well)`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
`;

export const Steps = styled(OrderedList)`
  margin: 10px 0 0;
  padding-left: 22px;
`;

export const Step = styled(OrderedList.Item)`
  margin: 0 0 7px;
  padding-left: 1px;
  &:last-child { margin-bottom: 0; }
`;

export const ResultList = styled.div`
  width: 100%;
  min-width: 0;
`;

export const ResultRow = styled.div`
  box-sizing: border-box;
  min-width: 0;
  padding: 9px 0;
  border-bottom: 1px solid ${p => getColor({ theme: p.theme, variable: 'border.subtle' })};
  &:last-child { border-bottom: 0; }
`;

export const ResultTitle = styled(Anchor)`
  display: block;
  max-width: 100%;
  overflow-wrap: anywhere;
  line-height: 1.35;
`;

export const Excerpt = styled(SM)`
  display: block;
  margin-top: 3px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
  line-height: 1.35;
`;

export const MetaLine = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

export const Metadata = styled(SM)`
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
`;

export const SearchRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  align-items: flex-end;
`;

export const SearchFieldWrap = styled.div`
  flex: 1;
  min-width: 0;
`;

export const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0;
`;

export const EmptyText = styled(SM)`
  display: block;
  text-align: center;
  padding: 12px 0;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
`;

export const ErrorText = styled(SM)`
  display: block;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
  background: ${p => getColor({ theme: p.theme, variable: 'background.subtle' })};
`;
