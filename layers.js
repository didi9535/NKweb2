var wms_layers = [];


        var lyr_VWorldSatellite_0 = new ol.layer.Tile({
            'title': 'VWorld Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://xdworld.vworld.kr:8080/2d/Satellite/service/{z}/{x}/{y}.jpeg'
            })
        });
var format_N3L_A0020000_1 = new ol.format.GeoJSON();
var features_N3L_A0020000_1 = format_N3L_A0020000_1.readFeatures(json_N3L_A0020000_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N3L_A0020000_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N3L_A0020000_1.addFeatures(features_N3L_A0020000_1);
var lyr_N3L_A0020000_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N3L_A0020000_1, 
                style: style_N3L_A0020000_1,
                interactive: true,
                title: '<img src="styles/legend/N3L_A0020000_1.png" /> N3L_A0020000 (도로중심선)'
            });
var format_N3P_C0330000_2 = new ol.format.GeoJSON();
var features_N3P_C0330000_2 = format_N3P_C0330000_2.readFeatures(json_N3P_C0330000_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N3P_C0330000_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N3P_C0330000_2.addFeatures(features_N3P_C0330000_2);
var lyr_N3P_C0330000_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N3P_C0330000_2, 
                style: style_N3P_C0330000_2,
                interactive: true,
                title: '<img src="styles/legend/N3P_C0330000_2.png" /> N3P_C0330000 (비석/기념비)'
            });
var format_N3P_H0040000_3 = new ol.format.GeoJSON();
var features_N3P_H0040000_3 = format_N3P_H0040000_3.readFeatures(json_N3P_H0040000_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N3P_H0040000_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N3P_H0040000_3.addFeatures(features_N3P_H0040000_3);
var lyr_N3P_H0040000_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N3P_H0040000_3, 
                style: style_N3P_H0040000_3,
                interactive: true,
                title: '<img src="styles/legend/N3P_H0040000_3.png" /> N3P_H0040000 (지명)'
            });
var format_N3A_B0010000_4 = new ol.format.GeoJSON();
var features_N3A_B0010000_4 = format_N3A_B0010000_4.readFeatures(json_N3A_B0010000_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N3A_B0010000_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N3A_B0010000_4.addFeatures(features_N3A_B0010000_4);
var lyr_N3A_B0010000_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N3A_B0010000_4, 
                style: style_N3A_B0010000_4,
                interactive: true,
                title: '<img src="styles/legend/N3A_B0010000_4.png" /> N3A_B0010000 (건물)'
            });
var format_N3A_A0010000_5 = new ol.format.GeoJSON();
var features_N3A_A0010000_5 = format_N3A_A0010000_5.readFeatures(json_N3A_A0010000_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N3A_A0010000_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N3A_A0010000_5.addFeatures(features_N3A_A0010000_5);
var lyr_N3A_A0010000_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N3A_A0010000_5, 
                style: style_N3A_A0010000_5,
                interactive: true,
                title: '<img src="styles/legend/N3A_A0010000_5.png" /> N3A_A0010000 (도로경계)'
            });
var format_N3A_A0160024_6 = new ol.format.GeoJSON();
var features_N3A_A0160024_6 = format_N3A_A0160024_6.readFeatures(json_N3A_A0160024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N3A_A0160024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N3A_A0160024_6.addFeatures(features_N3A_A0160024_6);
var lyr_N3A_A0160024_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N3A_A0160024_6, 
                style: style_N3A_A0160024_6,
                interactive: true,
                title: '<img src="styles/legend/N3A_A0160024_6.png" /> N3A_A0160024 (철도)'
            });
var format_N3A_A0191221_7 = new ol.format.GeoJSON();
var features_N3A_A0191221_7 = format_N3A_A0191221_7.readFeatures(json_N3A_A0191221_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N3A_A0191221_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N3A_A0191221_7.addFeatures(features_N3A_A0191221_7);
var lyr_N3A_A0191221_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N3A_A0191221_7, 
                style: style_N3A_A0191221_7,
                interactive: true,
                title: '<img src="styles/legend/N3A_A0191221_7.png" /> N3A_A0191221 (기차역)'
            });
var format_N3A_C0186115_8 = new ol.format.GeoJSON();
var features_N3A_C0186115_8 = format_N3A_C0186115_8.readFeatures(json_N3A_C0186115_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N3A_C0186115_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N3A_C0186115_8.addFeatures(features_N3A_C0186115_8);
var lyr_N3A_C0186115_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N3A_C0186115_8, 
                style: style_N3A_C0186115_8,
                interactive: true,
                title: '<img src="styles/legend/N3A_C0186115_8.png" /> N3A_C0186115 (저장탱크)'
            });

lyr_VWorldSatellite_0.setVisible(true);lyr_N3L_A0020000_1.setVisible(true);lyr_N3P_C0330000_2.setVisible(true);lyr_N3P_H0040000_3.setVisible(true);lyr_N3A_B0010000_4.setVisible(true);lyr_N3A_A0010000_5.setVisible(true);lyr_N3A_A0160024_6.setVisible(true);lyr_N3A_A0191221_7.setVisible(true);lyr_N3A_C0186115_8.setVisible(true);
var layersList = [lyr_VWorldSatellite_0,lyr_N3L_A0020000_1,lyr_N3P_C0330000_2,lyr_N3P_H0040000_3,lyr_N3A_B0010000_4,lyr_N3A_A0010000_5,lyr_N3A_A0160024_6,lyr_N3A_A0191221_7,lyr_N3A_C0186115_8];
lyr_N3L_A0020000_1.set('fieldAliases', {'UFID': 'UFID', 'RDNU': 'RDNU', 'NAME': 'NAME', 'RDDV': 'RDDV', 'STPT': 'STPT', 'EDPT': 'EDPT', 'PVQT': 'PVQT', 'DVYN': 'DVYN', 'RDLN': 'RDLN', 'RVWD': 'RVWD', 'ONSD': 'ONSD', 'REST': 'REST', 'RDNM': 'RDNM', 'SCLS': 'SCLS', 'FMTA': 'FMTA', '도로경사도': '도로경사도', });
lyr_N3P_C0330000_2.set('fieldAliases', {'UFID': 'UFID', 'NAME': 'NAME', 'DIVI': 'DIVI', 'HEIG': 'HEIG', 'REST': 'REST', 'BJCD': 'BJCD', 'SCLS': 'SCLS', 'FMTA': 'FMTA', '높이': '높이', });
lyr_N3P_H0040000_3.set('fieldAliases', {'UFID': 'UFID', 'NAME': 'NAME', 'DIVI': 'DIVI', 'TYPE': 'TYPE', 'BJCD': 'BJCD', 'SCLS': 'SCLS', 'FMTA': 'FMTA', });
lyr_N3A_B0010000_4.set('fieldAliases', {'UFID': 'UFID', 'BJCD': 'BJCD', 'NAME': 'NAME', 'DIVI': 'DIVI', 'KIND': 'KIND', 'SERV': 'SERV', 'ANNO': 'ANNO', 'NMLY': 'NMLY', 'RDNM': 'RDNM', 'BONU': 'BONU', 'BUNU': 'BUNU', 'POST': 'POST', 'SCLS': 'SCLS', 'FMTA': 'FMTA', 'GIDN': 'GIDN', '바닥높이': '바닥높이', '건물높이': '건물높이', '높이': '높이', '추정인구수': '추정인구수', });
lyr_N3A_A0010000_5.set('fieldAliases', {'UFID': 'UFID', 'SCLS': 'SCLS', 'FMTA': 'FMTA', });
lyr_N3A_A0160024_6.set('fieldAliases', {'UFID': 'UFID', 'SCLS': 'SCLS', 'FMTA': 'FMTA', });
lyr_N3A_A0191221_7.set('fieldAliases', {'UFID': 'UFID', 'NAME': 'NAME', 'SCLS': 'SCLS', 'FMTA': 'FMTA', });
lyr_N3A_C0186115_8.set('fieldAliases', {'UFID': 'UFID', 'NAME': 'NAME', 'SERV': 'SERV', 'MNGT': 'MNGT', 'SCLS': 'SCLS', 'FMTA': 'FMTA', '높이': '높이', });
lyr_N3L_A0020000_1.set('fieldImages', {'UFID': '', 'RDNU': '', 'NAME': '', 'RDDV': '', 'STPT': '', 'EDPT': '', 'PVQT': '', 'DVYN': '', 'RDLN': '', 'RVWD': '', 'ONSD': '', 'REST': '', 'RDNM': '', 'SCLS': '', 'FMTA': '', '도로경사도': '', });
lyr_N3P_C0330000_2.set('fieldImages', {'UFID': '', 'NAME': '', 'DIVI': '', 'HEIG': '', 'REST': '', 'BJCD': '', 'SCLS': '', 'FMTA': '', '높이': '', });
lyr_N3P_H0040000_3.set('fieldImages', {'UFID': 'TextEdit', 'NAME': 'TextEdit', 'DIVI': 'TextEdit', 'TYPE': 'TextEdit', 'BJCD': 'TextEdit', 'SCLS': 'TextEdit', 'FMTA': 'TextEdit', });
lyr_N3A_B0010000_4.set('fieldImages', {'UFID': '', 'BJCD': '', 'NAME': '', 'DIVI': '', 'KIND': '', 'SERV': '', 'ANNO': '', 'NMLY': '', 'RDNM': '', 'BONU': '', 'BUNU': '', 'POST': '', 'SCLS': '', 'FMTA': '', 'GIDN': '', '바닥높이': '', '건물높이': '', '높이': '', '추정인구수': '', });
lyr_N3A_A0010000_5.set('fieldImages', {'UFID': '', 'SCLS': '', 'FMTA': '', });
lyr_N3A_A0160024_6.set('fieldImages', {'UFID': '', 'SCLS': '', 'FMTA': '', });
lyr_N3A_A0191221_7.set('fieldImages', {'UFID': 'TextEdit', 'NAME': 'TextEdit', 'SCLS': 'TextEdit', 'FMTA': 'TextEdit', });
lyr_N3A_C0186115_8.set('fieldImages', {'UFID': '', 'NAME': '', 'SERV': '', 'MNGT': '', 'SCLS': '', 'FMTA': '', '높이': '', });
lyr_N3L_A0020000_1.set('fieldLabels', {'UFID': 'no label', 'RDNU': 'no label', 'NAME': 'no label', 'RDDV': 'no label', 'STPT': 'no label', 'EDPT': 'no label', 'PVQT': 'no label', 'DVYN': 'no label', 'RDLN': 'no label', 'RVWD': 'inline label', 'ONSD': 'no label', 'REST': 'no label', 'RDNM': 'no label', 'SCLS': 'no label', 'FMTA': 'no label', '도로경사도': 'inline label', });
lyr_N3P_C0330000_2.set('fieldLabels', {'UFID': 'no label', 'NAME': 'no label', 'DIVI': 'no label', 'HEIG': 'no label', 'REST': 'no label', 'BJCD': 'no label', 'SCLS': 'no label', 'FMTA': 'no label', '높이': 'inline label', });
lyr_N3P_H0040000_3.set('fieldLabels', {'UFID': 'no label', 'NAME': 'no label', 'DIVI': 'no label', 'TYPE': 'no label', 'BJCD': 'no label', 'SCLS': 'no label', 'FMTA': 'no label', });
lyr_N3A_B0010000_4.set('fieldLabels', {'UFID': 'no label', 'BJCD': 'no label', 'NAME': 'no label', 'DIVI': 'no label', 'KIND': 'inline label', 'SERV': 'inline label', 'ANNO': 'no label', 'NMLY': 'no label', 'RDNM': 'no label', 'BONU': 'no label', 'BUNU': 'no label', 'POST': 'no label', 'SCLS': 'no label', 'FMTA': 'no label', 'GIDN': 'no label', '바닥높이': 'inline label', '건물높이': 'inline label', '높이': 'inline label', '추정인구수': 'inline label', });
lyr_N3A_A0010000_5.set('fieldLabels', {'UFID': 'no label', 'SCLS': 'no label', 'FMTA': 'no label', });
lyr_N3A_A0160024_6.set('fieldLabels', {'UFID': 'no label', 'SCLS': 'no label', 'FMTA': 'no label', });
lyr_N3A_A0191221_7.set('fieldLabels', {'UFID': 'no label', 'NAME': 'no label', 'SCLS': 'no label', 'FMTA': 'no label', });
lyr_N3A_C0186115_8.set('fieldLabels', {'UFID': 'no label', 'NAME': 'no label', 'SERV': 'no label', 'MNGT': 'no label', 'SCLS': 'no label', 'FMTA': 'no label', '높이': 'inline label', });
lyr_N3A_C0186115_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});