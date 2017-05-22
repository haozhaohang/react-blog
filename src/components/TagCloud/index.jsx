import React from 'react';
import { Link } from 'react-router';

// css
import './index.styl';

const TagCloud = ({ list }) =>
    (
        <section className="tag-cloud-wrapper">
            <div className="title">
                <h3>
                    <a title="查看所有标签">热门标签</a>
                </h3>
                <span>Tag Cloud</span>
            </div>
            <div className="list">
                {
                    list.map(({ name }, index) => <Link key={index} title="">{name}</Link>)
                }
            </div>
        </section>
    );

export default TagCloud;
