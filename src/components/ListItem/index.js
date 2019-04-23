import React from 'react';

import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles';

const ListItem = () => {
    return (
        <Item>
            <ExternalLink>
                <Title>
                    My ListItem <Host>(hackernews.com)</Host>
                </Title>
            </ExternalLink>
            <Description>
                A win by {''}
                <CommentLink href="#" rel="nofollow noreferrer noopener" target="_blank">
                    Testing
                </CommentLink>
                1 hour ago
                {' | '}
                <CommentLink href="#" rel="nofollow noreferrer noopener" target="_blank">
                    25 Comments
                </CommentLink>
            </Description>
        </Item>
    );
};

export default ListItem;