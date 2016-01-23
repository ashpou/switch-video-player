// JavaScript Document
function AfficheCache( nom, numero )
		{
			var divID = nom + numero;
			if ( document.getElementById && document.getElementById( divID ) )
				{
					Pdiv = document.getElementById( divID );
					PcH = true;
		 		}
			else if ( document.all && document.all[ divID ] )
				{
					Pdiv = document.all[ divID ];
					PcH = true;
				}
			else if ( document.layers && document.layers[ divID ] )
				{
					Pdiv = document.layers[ divID ];
					PcH = true;
				}
			else
				{
					
					PcH = false;
				}
			if ( PcH )
				{
					Pdiv.className = ( Pdiv.className == 'cachediv' ) ? '' : 'cachediv';
				}
		}
		
			function CacheTout( nom )
		{	
			var NumDiv = 1;
			if ( document.getElementById ) 
				{
					while ( document.getElementById( nom + NumDiv) )
						{
							SetDiv = document.getElementById( nom + NumDiv );
							if ( SetDiv && SetDiv.className != 'cachediv' )
								{
									AfficheCache( nom, NumDiv );
								}
							NumDiv++;
						}
				}
			else if ( document.all )
				{
					while ( document.all[ nom + NumDiv ] )
						{
							SetDiv = document.all[ nom + NumDiv ];
							if ( SetDiv && SetDiv.className != 'cachediv' )
								{
									AfficheCache( nom, NumDiv );
								}
							NumDiv++;
						}
				}
			else if ( document.layers )
				{
					while ( document.layers[ nom + NumDiv ] )
						{
							SetDiv = document.layers[ nom + NumDiv ];
							if ( SetDiv && SetDiv.className != 'cachediv' )
								{
									AfficheCache( nom, NumDiv );
								}
							NumDiv++;
						}
				}
		}