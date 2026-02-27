import React, { useState, useRef, useEffect } from 'react';

const SearchableDropdown = ({ options, placeholder, value, onChange, disabled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef(null);

    // Filter options based on search term
    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm(""); // Reset search when clicking away
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="form-inner" style={{ position: 'relative' }}>
            {/* Main Selection Area - Mimicking nice-select's default state */}
            <div
                onClick={() => !disabled && setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    height: '60px', /* Matches FindJob input heights */
                    padding: '0 20px',
                    background: '#fff',
                    border: '1px solid #DFE9E5',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    color: value ? 'var(--title-color1)' : '#7C8A9B',
                    opacity: disabled ? 0.6 : 1,
                    position: 'relative',
                    userSelect: 'none'
                }}
            >
                {value || placeholder}

                {/* Custom SVG Arrow matching the template */}
                <span style={{
                    position: 'absolute',
                    right: '25px',
                    top: '50%',
                    transform: isOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)',
                    transition: 'all 0.3s ease',
                    pointerEvents: 'none'
                }}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41 0.589966L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L0 1.99997L1.41 0.589966Z" fill="#1C2120" />
                    </svg>
                </span>
            </div>

            {/* Dropdown Menu - Styled identically to the Nav sub-menus */}
            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        minWidth: '250px',
                        background: '#fff',
                        border: '1px solid #DFE9E5',
                        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
                        zIndex: 9999,
                        marginTop: '5px',
                        padding: '15px',
                        borderRadius: '5px'
                    }}
                >
                    {/* Search Input Box Inside Dropdown */}
                    <div style={{ paddingBottom: '10px', borderBottom: '1px solid #eee', marginBottom: '10px' }}>
                        <input
                            type="text"
                            placeholder={`Search ${placeholder}...`}
                            value={searchTerm}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking input
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px 15px',
                                border: '1px solid #DFE9E5',
                                borderRadius: '4px',
                                fontSize: '14px',
                                height: 'auto',
                                background: '#f5f5f5',
                                color: 'var(--title-color1)'
                            }}
                        />
                    </div>

                    {/* Options List wrapper with independent Native Scrolling */}
                    <ul style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        maxHeight: '220px',
                        overflowY: 'auto'
                    }}>
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, idx) => (
                                <li
                                    key={idx}
                                    onClick={() => {
                                        onChange(option);
                                        setIsOpen(false);
                                        setSearchTerm("");
                                    }}
                                    style={{
                                        padding: '10px 15px',
                                        cursor: 'pointer',
                                        fontSize: '15px',
                                        color: 'var(--title-color1)',
                                        borderBottom: idx !== filteredOptions.length - 1 ? '1px solid #eee' : 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color1)'}
                                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--title-color1)'}
                                >
                                    {option}
                                </li>
                            ))
                        ) : (
                            <li style={{ padding: '10px 15px', color: '#7C8A9B', fontSize: '14px', textAlign: 'center' }}>
                                No results found.
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchableDropdown;
