import React from 'react';
import s from './Users.module.css';
import defaultUserPhoto from '../../assets/images/user.jpg';
import {Button, Pagination} from "antd";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    return (
        <div style={{padding: '1rem'}}>
            <Pagination current={props.currentPage}
                        pageSize={props.pageSize}
                        onChange={props.paginationClickHandler}
                        total={props.totalPages}/>
            {props.users.map(u => {
                return (
                    <div key={u.id} style={{padding: '1rem'}} className={s.userBox}>
                        <div style={{width: '100px'}}>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img className={s.ava}
                                         src={u.photos.small !== null ? u.photos.small : defaultUserPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <Button disabled={props.followHandlerArrayOfUsers.some(id => id === u.id)}
                                                  type="primary" onClick={() => {
                                            props.unFollow(u.id)
                                        }}>Unfollow</Button>
                                        : <Button disabled={props.followHandlerArrayOfUsers.some(id => id === u.id)}
                                                  type="primary" onClick={() => {
                                            props.follow(u.id);
                                        }}>Follow</Button>
                                }
                            </div>
                        </div>
                        <div style={{width: '244px'}}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.cityName'}</div>
                        </div>

                    </div>)
            })}
        </div>
    )

}

export default Users;