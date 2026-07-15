import React from 'react';
import styled from 'styled-components';

const Card = () => {
    return (
        <StyledWrapper>
            <div className="tree-container">
                <ul>
                    <li className="tree-item">
                        <input type="checkbox" id="folder-src" className="tree-toggle" defaultChecked />
                        <label htmlFor="folder-src" className="tree-label">
                            <svg className="icon folder-closed-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                            </svg>
                            <svg className="icon folder-open-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                                <path d="M2 10h20" />
                            </svg>
                            src
                        </label>
                        <div className="tree-children-wrapper">
                            <ul className="tree-children">
                                <li className="tree-item">
                                    <input type="checkbox" id="folder-app" className="tree-toggle" defaultChecked />
                                    <label htmlFor="folder-app" className="tree-label">
                                        <svg className="icon folder-closed-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                                        </svg>
                                        <svg className="icon folder-open-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                                            <path d="M2 10h20" />
                                        </svg>
                                        app
                                    </label>
                                    <div className="tree-children-wrapper">
                                        <ul className="tree-children">
                                            <li className="tree-item">
                                                <div className="file-item">
                                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                        <polyline points="14 2 14 8 20 8" />
                                                    </svg>
                                                    layout.tsx
                                                </div>
                                            </li>
                                            <li className="tree-item">
                                                <div className="file-item">
                                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                        <polyline points="14 2 14 8 20 8" />
                                                    </svg>
                                                    page.tsx
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="tree-item">
                                    <input type="checkbox" id="folder-components" className="tree-toggle" defaultChecked />
                                    <label htmlFor="folder-components" className="tree-label">
                                        <svg className="icon folder-closed-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                                        </svg>
                                        <svg className="icon folder-open-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                                            <path d="M2 10h20" />
                                        </svg>
                                        components
                                    </label>
                                    <div className="tree-children-wrapper">
                                        <ul className="tree-children">
                                            <li className="tree-item">
                                                <input type="checkbox" id="folder-ui" className="tree-toggle" defaultChecked />
                                                <label htmlFor="folder-ui" className="tree-label">
                                                    <svg className="icon folder-closed-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                                                    </svg>
                                                    <svg className="icon folder-open-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                                                        <path d="M2 10h20" />
                                                    </svg>
                                                    ui
                                                </label>
                                                <div className="tree-children-wrapper">
                                                    <ul className="tree-children">
                                                        <li className="tree-item">
                                                            <div className="file-item is-selected">
                                                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                                    <polyline points="14 2 14 8 20 8" />
                                                                </svg>
                                                                Hooks.tsx
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="tree-children-wrapper">
                                                    <ul className="tree-children">
                                                        <li className="tree-item">
                                                            <div className="file-item is-selected">
                                                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                                    <polyline points="14 2 14 8 20 8" />
                                                                </svg>
                                                                ContextAPI.tsx
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="tree-children-wrapper">
                                                    <ul className="tree-children">
                                                        <li className="tree-item">
                                                            <div className="file-item is-selected">
                                                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                                    <polyline points="14 2 14 8 20 8" />
                                                                </svg>
                                                                Angular-Pipes.ts
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="tree-children-wrapper">
                                                    <ul className="tree-children">
                                                        <li className="tree-item">
                                                            <div className="file-item is-selected">
                                                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                                    <polyline points="14 2 14 8 20 8" />
                                                                </svg>
                                                                Angular-Services.ts
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="tree-item">
                                                <div className="file-item">
                                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                        <polyline points="14 2 14 8 20 8" />
                                                    </svg>
                                                    header.tsx
                                                </div>
                                            </li>
                                            <li className="tree-item">
                                                <div className="file-item">
                                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                        <polyline points="14 2 14 8 20 8" />
                                                    </svg>
                                                    footer.tsx
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="tree-item">
                                    <input type="checkbox" id="folder-lib" className="tree-toggle" defaultChecked />
                                    <label htmlFor="folder-lib" className="tree-label">
                                        <svg className="icon folder-closed-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                                        </svg>
                                        <svg className="icon folder-open-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                                            <path d="M2 10h20" />
                                        </svg>
                                        lib
                                    </label>
                                    <div className="tree-children-wrapper">
                                        <ul className="tree-children">
                                            <li className="tree-item">
                                                <div className="file-item">
                                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                        <polyline points="14 2 14 8 20 8" />
                                                    </svg>
                                                    utils.ts
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .tree-container {
    width: 320px;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    padding: 24px;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul ul {
    margin-left: 11px;
    padding-left: 11px;
    border-left: 1px solid #e4e4e7;
  }

  .tree-item {
    position: relative;
    margin-top: 4px;
  }

  ul ul .tree-item::before {
    content: "";
    position: absolute;
    left: -11px;
    top: 14px;
    width: 11px;
    height: 1px;
    background-color: #e4e4e7;
  }

  .tree-label,
  .file-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    color: #09090b;
    transition: background-color 0.2s;
    user-select: none;
    text-decoration: none;
    height: 28px;
  }

  .tree-label:hover,
  .file-item:hover {
    background-color: #f4f4f5;
  }

  .is-selected {
    background-color: #f4f4f5;
    color: #09090b;
    font-weight: 500;
  }

  .icon {
    width: 16px;
    height: 16px;
    color: #71717a;
    flex-shrink: 0;
  }

  .folder-open-icon {
    display: none;
  }
  .folder-closed-icon {
    display: block;
  }

  .tree-toggle:checked ~ .tree-label .folder-open-icon {
    display: block;
    color: #09090b;
  }
  .tree-toggle:checked ~ .tree-label .folder-closed-icon {
    display: none;
  }

  .tree-toggle {
    display: none;
  }

  .tree-children-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease-in-out;
  }

  .tree-children {
    overflow: hidden;
  }

  /* State: Open */
  .tree-toggle:checked ~ .tree-children-wrapper {
    grid-template-rows: 1fr;
  }`;

export default Card;
