import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure about this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    avatarUrl={faker.image.avatar()} 
                    content={faker.random.words(3)} 
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 5:45PM" 
                    avatarUrl={faker.image.avatar()} 
                    content={faker.random.words(3)} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 6:45PM" 
                    avatarUrl={faker.image.avatar()} 
                    content={faker.random.words(3)} 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));