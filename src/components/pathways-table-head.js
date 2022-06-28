import React from 'react';

const PathwaysTableHead = () => {
    return (
        <tr>
            <td>pathway_id</td>
            <td>from_stop_id</td>
            <td>to_stop_id</td>
            <td>pathway_mode</td>
            <td>is_bidirectional</td>
            <td>length</td>
            <td>traversal_time</td>
            <td>stair_count</td>
            <td>max_slope</td>
            <td>min_width</td>
            <td>signposted_as</td>
            <td>reversed_signposted_as</td>
        </tr>
    );
};

export default PathwaysTableHead;
