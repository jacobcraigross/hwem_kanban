import React from 'react';
import Card from '../compo/shared/Card';
import {Link} from 'react-router-dom';

function About() {
    return (
        <Card>
            <div className="about">
                <h1>
                    MySQL Workbench delivers visual tools for creating, executing, and optimizing SQL queries. The SQL Editor provides color syntax highlighting, auto-complete, reuse of SQL snippets, and execution history of SQL. The Database Connections Panel enables developers to easily manage standard database connections, including MySQL Fabric. The Object Browser provides instant access to database schema and objects.
                </h1>

                <p>
                MySQL Workbench now provides a complete, easy to use solution for migrating Microsoft SQL Server, Microsoft Access, Sybase ASE, PostreSQL, and other RDBMS tables, objects and data to MySQL. Developers and DBAs can quickly and easily convert existing applications to run on MySQL both on Windows and other platforms. Migration also supports migrating from earlier versions of MySQL to the latest releases.
                </p>

                <p>
                    <Link to="/">Go back to home.</Link>
                </p>
            </div>
        </Card>
    )
}

export default About
